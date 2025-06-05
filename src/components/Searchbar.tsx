import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Searchbar() {
  return (
    <>
      <form action="" className="flex gap-2 rounded-3xl overflow-hidden h-8 w-100">
        <input type="text" className="bg-[#253340] outline-0 w-80 text-white px-3" placeholder="Rechercher" />
        <FontAwesomeIcon icon={faMagnifyingGlass} className=" rounded-r-3xl text-3xl text-gray-200" />
      </form>
    </>
  );
}
