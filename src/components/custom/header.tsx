import { Home, MessageCircleQuestion, Webhook } from 'lucide-react';

import { ThemeToggleButton } from '../theme/theme-toggle-button';
import { Separator } from '../ui/separator';
import { AccountMenu } from './account-menu';
import { NavLink } from './nav-link';

type HeaderProps = {
  role: string;
};

export function Header({ role }: HeaderProps) {
  const isAdmin = role === 'admin';

  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-4 sm:px-8">
        <Webhook className="hidden h-6 w-6 min-[440px]:block" />
        <Separator
          orientation="vertical"
          className="hidden h-6 min-[440px]:block"
        />
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink href="/">
            <Home className="h-6 w-6 min-[440px]:h-4 min-[440px]:w-4" />
            Início
          </NavLink>
          {isAdmin && (
            <NavLink href="/incidents">
              <MessageCircleQuestion className="h-6 w-6 min-[440px]:h-4 min-[440px]:w-4" />
              Chamados
            </NavLink>
          )}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggleButton />
          <AccountMenu />
        </div>
      </div>
    </div>
  );
}
