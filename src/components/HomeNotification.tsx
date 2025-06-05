import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

export default function HomeNotification() {
  return (
    <button className="text-3xl text-gray-200 cursor-pointer">
      <FontAwesomeIcon icon={faBell} />
    </button>
  );
}
