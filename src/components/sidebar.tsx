import SideHina from './side-hina.tsx';
import SideMessage from './side-message.tsx';
import SideVieDuClub from './side-vie-du-club.tsx';
import SideVieEtudiante from './side-vie-etudiante.tsx';

export default function Sidebar() {
  return (
    <div className="bg-[#16202a] fixed h-[100%] w-3xs flex flex-col justify-around items-center">
      <div className="flex flex-col gap-6">
        <SideHina />
        <SideVieDuClub />
        <SideVieEtudiante />
        <SideMessage />
      </div>
    </div>
  );
}
