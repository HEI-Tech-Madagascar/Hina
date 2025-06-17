import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

export default function HeaderUserIcon() {
  return (
    <button className="text-3xl text-gray-200 cursor-pointer">
      <FontAwesomeIcon icon={faCircleUser} />
    </button>
  );
}
