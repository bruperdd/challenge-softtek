'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export interface NavLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const NavLink = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ ...props }, ref) => {
  const pathname = usePathname();

  return (
    <Link
      data-current={pathname === props.href}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
      ref={ref}
      {...props}
    />
  );
});

NavLink.displayName = 'NavLink';
