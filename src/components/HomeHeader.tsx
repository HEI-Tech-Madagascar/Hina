import Searchbar from './Searchbar';

export default function HomeHeader() {
  return (
    <header className="bg-[#16202a] h-15 flex justify-between items-center px-7 border-white">
      <h1 className="text-white font-bold">HINA</h1>
      <Searchbar />
      <div className="text-white flex gap-2">
        <button>Notif</button>
        <button>User</button>
      </div>
    </header>
  );
}
