import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HomeNotification() {
  return (
    <button className="text-2xl text-gray-200 cursor-pointer">
      <FontAwesomeIcon icon={faBell} />
    </button>
  );
}
