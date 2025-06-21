import { type ReactNode } from 'react';

export default function AuthFormLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="space-y-6">
        <div className="transform transition-all duration-300 ease-in-out">{children}</div>
      </div>
      <div className="animate-fade-in mt-8 text-center text-xs text-slate-500">
        <p>En vous connectant, vous acceptez nos</p>
        <div className="mt-1 flex flex-wrap items-center justify-center gap-1">
          <button className="hover:text-azure-600 underline-offset-2 transition-colors hover:underline">
            Conditions d'utilisation
          </button>
          <span>et notre</span>
          <button className="hover:text-azure-600 underline-offset-2 transition-colors hover:underline">
            Politique de confidentialité
          </button>
        </div>
      </div>
    </>
  );
}
