import { LogOut, X } from 'lucide-react';
import { navigation } from '@/constants';
import { MoonLoader } from 'react-spinners';
import { useNavigate } from 'react-router';

export type SidebarProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  currentPage: string;
  onPageChange: (page: string) => void;
  handleLogout: () => Promise<void>;
  isLoading: boolean;
};

export default function Sidebar({
  isSidebarOpen,
  setIsSidebarOpen,
  onPageChange,
  handleLogout,
  currentPage,
  isLoading,
}: SidebarProps) {
  const navigate = useNavigate();

  return (
    <>
      {isSidebarOpen && (
        <div
          className="bg-opacity-50 dark:bg-opacity-70 fixed inset-0 z-40 bg-gray-900 lg:hidden dark:bg-black"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition-all duration-300 ease-in-out lg:static lg:inset-0 lg:flex lg:translate-x-0 lg:flex-col dark:bg-gray-800 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="from-ocean-50 to-azure-50 dark:from-ocean-900/20 dark:to-azure-900/20 flex h-16 flex-shrink-0 items-center justify-between border-b border-gray-200 bg-gradient-to-r px-6 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="from-ocean-500 to-azure-600 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br">
              <span className="text-sm font-bold text-white">H</span>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Hina</span>
              <p className="hidden text-xs text-gray-500 lg:block dark:text-gray-400">HEI Tech Madagascar</p>
            </div>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="rounded-md p-2 text-gray-400 hover:text-gray-500 lg:hidden dark:text-gray-300 dark:hover:text-gray-200"
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
                  navigate(`/app/${item.path}`);
                }}
                className={`mb-1 flex w-full cursor-pointer items-center rounded-lg px-3 py-3 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'from-ocean-50 to-azure-50 dark:from-ocean-900/30 dark:to-azure-900/30 text-ocean-700 dark:text-ocean-300 border-ocean-500 dark:border-ocean-400 border-r-5 bg-gradient-to-r'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                }`}
              >
                <item.icon
                  className={`mr-3 h-5 w-5 ${isActive ? 'text-ocean-600 dark:text-ocean-400' : 'text-gray-400 dark:text-gray-500'}`}
                />
                {item.name}
              </button>
            );
          })}
        </nav>
        <div className="flex-shrink-0 border-t border-gray-200 p-6 dark:border-gray-700">
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
    </>
  );
}
