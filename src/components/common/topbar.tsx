import { Bell, Menu, Search } from 'lucide-react';
import { Fiantso } from '@/assets';
import type { SidebarProps } from '@/components/common/sidebar';
import { toast } from 'sonner';

export default function Topbar({ setIsSidebarOpen }: Pick<SidebarProps, 'setIsSidebarOpen'>) {
  return (
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
        <div className="flex items-center space-x-4">
          <button
            onClick={() => toast.info('Cette fonctionnalité sera bientôt disponible', { className: 'font-poppins' })}
            className="relative cursor-pointer rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <div className="flex items-center space-x-3">
            <img src={Fiantso} alt="Profile" className="h-8 w-8 rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="hidden text-sm font-medium text-gray-700 sm:block">Fiantso Harena</span>
              <span className="hidden text-xs font-medium text-gray-400 sm:block">Membre</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
