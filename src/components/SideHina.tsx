import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SideHina() {
  return (
    <div className="flex items-center gap-2 text-[#0080ff] cursor-pointer hover:duration-400 hover:scale-110">
      <div className="w-7">
        <FontAwesomeIcon icon={faHouse} className="text-xl" />
      </div>
      <p className="text-xl">Hina</p>
    </div>
  );
}
