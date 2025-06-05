import HomeHeader from '../components/HomeHeader';
import SideBar from '../components/SideBar';
import AnnouncementCard from '../components/AnnouncementCard';

export default function Home() {
  return (
    <div className="bg-[#171a1f]">
      <HomeHeader />
      <SideBar />
      <AnnouncementCard />
    </div>
  );
}
