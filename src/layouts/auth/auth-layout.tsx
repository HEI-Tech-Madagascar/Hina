import { Outlet } from 'react-router';
import { HeiTech } from '@/assets';
import { RightPanelDescription } from '@/components';

export default function AuthLayout() {
  return (
    <main className="font-poppins flex min-h-screen">
      <Outlet />
      <article className="relative hidden flex-1 lg:flex">
        <div className="absolute inset-0">
          <img src={HeiTech} alt="Vim Workshop" className="h-full w-full object-cover" />
          <div className="from-azure-600/90 via-azure-500/85 to-ocean-600/90 absolute inset-0 bg-gradient-to-br" />
        </div>
        <RightPanelDescription />
      </article>
    </main>
  );
}
