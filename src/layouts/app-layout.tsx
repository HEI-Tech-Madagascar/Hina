import { Outlet, useNavigate } from 'react-router';
import { useState } from 'react';
import { LogOut, X } from 'lucide-react';
import { navigation } from '@/constants';
import { signOut } from '@/lib/supabase/auth';
import { MoonLoader } from 'react-spinners';

type AppLayoutProps = {
  currentPage: string;
  onPageChange: (page: string) => void;
};

export default function AppLayout({ currentPage, onPageChange }: AppLayoutProps) {
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
      {isSidebarOpen && (
        <div
          className="bg-opacity-50 fixed inset-0 z-40 bg-gray-900 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out lg:static lg:inset-0 lg:flex lg:translate-x-0 lg:flex-col ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="from-ocean-50 to-azure-50 flex h-16 flex-shrink-0 items-center justify-between border-b border-gray-200 bg-gradient-to-r px-6">
          <div className="flex items-center space-x-3">
            <div className="from-ocean-500 to-azure-600 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br">
              <span className="text-sm font-bold text-white">H</span>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">Hina</span>
              <p className="text-xs text-gray-500">HEI Tech Madagascar</p>
            </div>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="rounded-md p-2 text-gray-400 hover:text-gray-500 lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-6">
          {navigation.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onPageChange(item.id);
                  setIsSidebarOpen(false);
                }}
                className={`mb-1 flex w-full cursor-pointer items-center rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? 'from-ocean-50 to-azure-50 text-ocean-700 border-ocean-500 border-r-2 bg-gradient-to-r'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon className={`mr-3 h-5 w-5 ${isActive ? 'text-ocean-600' : 'text-gray-400'}`} />
                {item.name}
              </button>
            );
          })}
        </nav>
        <div className="flex-shrink-0 border-t border-gray-200 p-6">
          <button
            onClick={handleLogout}
            className="from-ocean-500 to-azure-600 mb-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r p-4 py-5 text-sm font-medium text-white transition-colors"
          >
            {isLoading ? (
              <MoonLoader size={16} color="white" />
            ) : (
              <>
                <LogOut className="h-5 w-5" />
                Se déconnecter
              </>
            )}
          </button>
        </div>
      </div>
      <Outlet />
    </main>
  );
}
