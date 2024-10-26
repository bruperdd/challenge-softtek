import { Avatar, AvatarFallback } from '../ui/avatar';

type ChatbotTextProps = {
  text: string;
  sender: string;
};

export function ChatbotText({ text, sender }: ChatbotTextProps) {
  if (sender === 'ai') {
    return (
      <div className="flex items-start gap-3">
        <Avatar className="w-14 h-14">
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <div className="flex-1 rounded-lg bg-gray-100 p-4 text-sm dark:bg-gray-800 min-h-14">
          <p>{text}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3 justify-end">
      <div className="flex-1 rounded-lg bg-gray-900 p-4 text-sm text-gray-50 dark:bg-gray-50 dark:text-gray-900 min-h-14">
        <p>{text}</p>
      </div>
      <Avatar className="w-14 h-14">
        <AvatarFallback>Você</AvatarFallback>
      </Avatar>
    </div>
  );
}
