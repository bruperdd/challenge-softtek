'use client';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Textarea } from '../ui/textarea';
import { ChatBotFab } from './chat-bot-fab';
import { ChatbotText } from './chat-bot-text';
import { ChatLoading } from './chat-loading';

export function ChatBotDialog() {
  const [chat, setChat] = useState<{ text: string; sender: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    setText('');
    e.preventDefault();
    try {
      setChat((prev) => [...prev, { text, sender: 'user' }]);
      setIsLoading(true);
      const response = await fetch('http://127.0.0.1:8000/query', {
        method: 'POST',
        body: JSON.stringify({ query_text: text }),
      });
      const data = await response.json();
      setChat((prev) => [...prev, { text: data.response, sender: 'ai' }]);

      await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve(
              setChat((prev) => [
                ...prev,
                { text: 'Hoje é sexta-feira', sender: 'ai' },
              ])
            ),
          1000
        )
      );
    } catch (error) {
      setChat((prev) => [
        ...prev,
        {
          text: 'Desculpe, não consegui processar sua pergunta. Por favor, tente novamente.',
          sender: 'ai',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chat]);

  return (
    <Dialog>
      <DialogTrigger>
        <ChatBotFab />
      </DialogTrigger>
      <DialogContent
        ref={chatRef}
        className="sm:max-w-[600px] overflow-y-scroll max-h-[80%]"
      >
        <DialogHeader>
          <DialogTitle>Softtek Assistant</DialogTitle>
          <DialogDescription>Assistente virtual de chamados</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-6">
          {chat.map(({ sender, text }, index) => (
            <ChatbotText key={index} text={text} sender={sender} />
          ))}
        </div>
        {isLoading && (
          <div className="my-4">
            <ChatLoading />
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Digite sua mensagem..."
          />
          <DialogFooter className="mt-4">
            <Button disabled={!text} type="submit">
              Enviar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
