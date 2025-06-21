import { Outlet, useNavigate } from 'react-router';
import { useState } from 'react';
import { signOut } from '@/lib/supabase/auth';
import { Sidebar } from '@/components';

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
    <main className="font-poppins flex h-screen overflow-hidden bg-gray-50">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isLoading={isLoading}
        handleLogout={handleLogout}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      <Outlet />
    </main>
  );
}
