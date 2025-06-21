import { Outlet, useNavigate } from 'react-router';
import { useState } from 'react';
import { signOut } from '@/lib/supabase/auth';
import { Sidebar } from '@/components';
import { Menu, Search } from 'lucide-react';

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
      <div className="flex flex-1 flex-col overflow-hidden lg:ml-0">
        <header className="flex-shrink-0 border-b border-gray-200 bg-white shadow-sm">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="rounded-md p-2 text-gray-400 hover:text-gray-500 lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
              <div className="ml-4 hidden sm:block lg:ml-0">
                <div className="relative">
                  <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    className="focus:ring-ocean-500 w-64 rounded-lg border border-gray-300 py-2 pr-4 pl-10 text-sm focus:border-transparent focus:ring-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <Outlet />
    </main>
  );
}
