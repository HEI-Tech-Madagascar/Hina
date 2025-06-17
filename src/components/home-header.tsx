import SearchBar from './search-bar.tsx';

import HeaderUserIcon from './header-user-icon.tsx';
import HomeNotification from './home-notification.tsx';

export default function HomeHeader() {
  return (
    <header className="bg-[#16202a] h-15 flex justify-between items-center px-7 border-b-1 border-[#2e3238] fixed z-50 w-full">
      <h1 className="text-white font-bold text-2xl">HINA</h1>
      <SearchBar />
      <div className="text-gray-200 flex gap-5 items-center">
        <HomeNotification />
        <HeaderUserIcon />
      </div>
    </header>
  );
}
