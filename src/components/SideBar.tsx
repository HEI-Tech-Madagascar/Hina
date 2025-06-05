import SideHina from './SideHina';
import SideMessage from './SideMessage';
import SideVieDuClub from './SideVieDuClub';
import SideVieEtudiante from './SideVieEtudiante';

export default function SideBar() {
  return (
    <div className="bg-[#16202a] fixed h-[100%] w-3xs flex flex-col justify-center items-center">
      <div className="flex flex-col gap-6">
        <SideHina />
        <SideVieDuClub />
        <SideVieEtudiante />
        <SideMessage />
      </div>
    </div>
  );
}
