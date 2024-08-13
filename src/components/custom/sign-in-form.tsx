'use client';
import { useFormState } from 'react-dom';

import { signIn } from '@/app/actions/sign-in';

import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { SignInButton } from './sign-in-button';

export function SignInForm() {
  const [state, formAction] = useFormState(signIn, undefined);

  return (
    <form
      action={formAction}
      className="mt-8 w-full max-w-[900px] mx-auto flex flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Digite seu e-mail:</Label>
        <Input
          autoComplete="username"
          id="email"
          type="email"
          name="email"
          placeholder="E-mail"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Digite sua senha:</Label>
        <Input
          autoComplete="current-password"
          id="password"
          type="password"
          name="password"
          placeholder="Senha"
        />
      </div>
      <SignInButton />
    </form>
  );
}
