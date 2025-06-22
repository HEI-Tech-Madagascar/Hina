import { Outlet, useNavigate } from 'react-router';
import { useState } from 'react';
import { signOut } from '@/lib/supabase/auth';
import { Sidebar, Topbar } from '@/components';

export default function AppLayout() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Erreur lors de la déconnexion', (error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="font-poppins flex h-screen overflow-hidden bg-gray-50">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isLoading={isLoading}
        handleLogout={handleLogout}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      <div className="flex flex-1 flex-col overflow-hidden lg:ml-0">
        <Topbar setIsSidebarOpen={setIsSidebarOpen} />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6 transition-colors duration-300 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
}
