import { toast } from 'sonner';

export default function SpeedActions() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 font-semibold text-gray-900">Actions rapides</h3>
      <div className="space-y-3">
        <button
          onClick={() => toast.info('Fonctionnalité bientôt disponible', { className: 'font-poppins' })}
          className="from-ocean-500 to-azure-600 hover:from-ocean-600 hover:to-azure-700 w-full cursor-pointer rounded-lg bg-gradient-to-r px-4 py-2 font-medium text-white transition-all duration-200"
        >
          Créer un post
        </button>
        <button
          onClick={() => toast.info('Fonctionnalité bientôt disponible', { className: 'font-poppins' })}
          className="w-full cursor-pointer rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          Rejoindre un événement
        </button>
        <button
          onClick={() => toast.info('Fonctionnalité bientôt disponible', { className: 'font-poppins' })}
          className="w-full cursor-pointer rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          Trouver un mentor
        </button>
      </div>
    </div>
  );
}
