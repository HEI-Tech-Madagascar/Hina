import HomeHeader from '../components/home-header.tsx';
import Sidebar from '../components/sidebar.tsx';
import AnnouncementCard from '../components/announcement-card.tsx';

export const Home = () => {
  return (
    <div className="bg-[#171a1f] flex flex-col">
      <HomeHeader />
      <div>
        <Sidebar />
        <AnnouncementCard />
      </div>
    </div>
  );
};
