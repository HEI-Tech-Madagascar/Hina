import HomeHeader from '../components/HomeHeader';
import SideBar from '../components/SideBar';
import AnnouncementCard from '../components/AnnouncementCard';

export const Home = () => {
  return (
    <div className="bg-[#171a1f] flex flex-col">
      <HomeHeader />
      <div>
        <SideBar />
        <AnnouncementCard />
      </div>
    </div>
  );
};
