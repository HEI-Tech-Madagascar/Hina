import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HeaderUserIcon() {
  return (
    <button className="text-3xl text-gray-200 cursor-pointer">
      <FontAwesomeIcon icon={faCircleUser} />
    </button>
  );
}
