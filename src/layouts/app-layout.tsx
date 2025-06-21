import { Outlet } from 'react-router';

export default function AppLayout() {
  return (
    <main className="font-poppins">
      <Outlet />
    </main>
  );
}
