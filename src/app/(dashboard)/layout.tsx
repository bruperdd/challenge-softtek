'use client';

import { ChatBotDialog } from '@/components/custom/chat-bot-dialog';
import { Header } from '@/components/custom/header';
import { useRole } from '@/contexts/user-role-context';

interface LayoutProps {
  user: React.ReactNode;
  admin: React.ReactNode;
}

export default function Layout({ admin, user }: LayoutProps) {
  const { role } = useRole();

  return (
    <>
      <Header role={role} />
      {role === 'user' ? user : admin}
      <ChatBotDialog />
    </>
  );
}
