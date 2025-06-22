import { HeroSection, LoginForm } from '@/components';
import { AuthFormLayout } from '@/layouts';

export default function Login() {
  return (
    <section className="relative flex flex-1 items-center justify-center p-6 lg:p-8 dark:bg-gray-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-azure-200/15 dark:bg-azure-800/15 absolute -top-20 -left-16 h-40 w-40 rounded-full blur-3xl lg:h-80 lg:w-80" />
        <div className="bg-ocean-200/15 dark:bg-ocean-800/15 absolute -bottom-20 left-1/4 h-40 w-40 rounded-full blur-3xl lg:h-80 lg:w-80" />
      </div>
      <div className="relative w-full max-w-xl overflow-hidden">
        <HeroSection />
        <AuthFormLayout>
          <LoginForm />
        </AuthFormLayout>
      </div>
    </section>
  );
}
