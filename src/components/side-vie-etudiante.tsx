import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SideVieEtudiante() {
  return (
    <div className="flex items-center gap-2 text-gray-200 cursor-pointer hover:text-[#0080ff] hover:duration-400 hover:scale-110">
      <div className="w-7">
        <FontAwesomeIcon icon={faCalendar} className="text-xl" />
      </div>
      <p className="text-lg ">Vie Etudiante</p>
    </div>
  );
}
