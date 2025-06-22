import { posts } from '@/constants';
import { ComingEvent, HomeStats, PostCard, SpeedActions } from '@/components';

export default function Home() {
  return (
    <section className="space-y-6">
      <div className="from-ocean-500 to-azure-600 rounded-2xl bg-gradient-to-r p-8 text-white">
        <div className="max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold">Bienvenue sur Hina</h1>
          <p className="text-ocean-100 text-sm leading-relaxed">
            La plateforme collaborative de HEI Tech Madagascar. Connectez-vous avec vos pairs, participez aux workshops,
            partagez vos projets et grandissez ensemble dans l'écosystème tech malgache.
          </p>
        </div>
      </div>
      <HomeStats />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Actualités récentes</h2>
            <button className="text-ocean-600 dark:text-ocean-400 hover:text-ocean-700 dark:hover:text-ocean-300 text-sm font-medium transition-colors duration-200">
              Voir tout
            </button>
          </div>
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="sticky top-8 z-20 space-y-6">
            <SpeedActions />
            <ComingEvent />
          </div>
        </div>
      </div>
    </section>
  );
}
