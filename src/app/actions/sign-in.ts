'use server';

import { redirect } from 'next/navigation';

export async function signIn() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  redirect('/');
}
