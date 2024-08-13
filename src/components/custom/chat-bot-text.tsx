import { Avatar, AvatarFallback } from '../ui/avatar';

type ChatbotTextProps = {
  chatText: {
    text: string;
    sender: string;
  };
};

export function ChatbotText({ chatText }: ChatbotTextProps) {
  if (chatText.sender === 'AI') {
    return (
      <div className="flex items-start gap-3">
        <Avatar>
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <div className="flex-1 rounded-lg bg-gray-100 p-4 text-sm dark:bg-gray-800">
          <p>Olá! Como posso ajudá-lo hoje?</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3 justify-end">
      <div className="flex-1 rounded-lg bg-gray-900 p-4 text-sm text-gray-50 dark:bg-gray-50 dark:text-gray-900">
        <p>{chatText.text}</p>
      </div>
      <Avatar>
        <AvatarFallback>Você</AvatarFallback>
      </Avatar>
    </div>
  );
}
