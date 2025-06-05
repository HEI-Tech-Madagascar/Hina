import Searchbar from './Searchbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons';

export default function HomeHeader() {
  return (
    <header className="bg-[#16202a] h-15 flex justify-between items-center px-7 border-white">
      <h1 className="text-white font-bold">HINA</h1>
      <Searchbar />
      <div className="text-gray-200 flex gap-5">
        <button className="text-3xl text-gray-200">
          <FontAwesomeIcon icon={faBell} />
        </button>
        <button className="text-3xl text-gray-200">
          <FontAwesomeIcon icon={faCircleUser} />
        </button>
      </div>
    </header>
  );
}
