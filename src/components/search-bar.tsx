import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar() {
  return (
    <>
      <form action="" className="flex  rounded-3xl overflow-hidden h-8 w-100 items-center ">
        <input
          type="text"
          className="bg-[#253340] outline-0 w-80 text-white px-3 rounded-3xl h-8"
          placeholder="Rechercher"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="  text-2xl text-gray-200 bg-[#253340] mx-[-40px] rounded-3xl cursor-pointer"
        />
      </form>
    </>
  );
}
