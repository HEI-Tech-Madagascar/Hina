import Searchbar from './Searchbar';

import HeaderUserIcon from './HeaderUserIcon';
import HomeNotification from './HomeNotification';

export default function HomeHeader() {
  return (
    <header className="bg-[#16202a] h-15 flex justify-between items-center px-7 border-b-1 border-[#2e3238]">
      <h1 className="text-white font-bold">HINA</h1>
      <Searchbar />
      <div className="text-gray-200 flex gap-5">
        <HomeNotification />
        <HeaderUserIcon />
      </div>
    </header>
  );
}
