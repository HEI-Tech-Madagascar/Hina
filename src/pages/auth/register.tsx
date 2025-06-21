import { HeroSection, RegisterForm } from '@/components';
import { AuthFormLayout } from '@/layouts';

export default function Register() {
  return (
    <section className="from-azure-50/50 via-ocean-50/30 relative flex flex-1 items-center justify-center bg-gradient-to-br to-slate-100/50 p-6 lg:p-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-azure-200/15 absolute -top-20 -left-16 h-40 w-40 rounded-full blur-3xl lg:h-80 lg:w-80" />
        <div className="bg-ocean-200/15 absolute -bottom-20 left-1/4 h-40 w-40 rounded-full blur-3xl lg:h-80 lg:w-80" />
      </div>
      <div className="relative w-full max-w-xl overflow-hidden">
        <HeroSection />
        <AuthFormLayout>
          <RegisterForm />
        </AuthFormLayout>
      </div>
    </section>
  );
}
