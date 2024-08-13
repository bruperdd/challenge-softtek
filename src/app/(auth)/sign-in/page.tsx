import Image from 'next/image';
import Link from 'next/link';

import { SignInForm } from '@/components/custom/sign-in-form';
import { Card } from '@/components/ui/card';

export default async function SignIn() {
  return (
    <main className="h-screen">
      <div className="p-4 lg:p-8 m-auto max-w-[1200px] flex flex-col justify-center">
        <Card className="p-4 flex flex-col items-center">
          <Image
            src="/logotipo.png"
            width={200}
            height={200}
            alt="Logo Softtek"
            style={{ width: 'auto', height: 'auto' }}
            priority
          />
          <SignInForm />
        </Card>
        <Card className="py-4 mt-4 text-center">
          <Link href="/sign-up">Ainda não tem uma conta?</Link>
        </Card>
      </div>
    </main>
  );
}
