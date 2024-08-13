import { Button } from '../ui/button';
import { ChatBotIcon } from './chat-bot-icon';

export function ChatBotFab() {
  return (
    <Button
      className="rounded-full bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
      size="icon"
      variant="outline"
    >
      <ChatBotIcon className="h-6 w-6" />
      <span className="sr-only">Abrir assistente virtual</span>
    </Button>
  );
}
