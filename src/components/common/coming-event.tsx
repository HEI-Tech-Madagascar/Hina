export default function ComintEvent() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 font-semibold text-gray-900">Événements à venir</h3>
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <div className="bg-azure-100 flex h-12 w-12 flex-col items-center justify-center rounded-lg">
            <span className="text-azure-600 text-xs font-medium">JUN</span>
            <span className="text-azure-700 text-sm font-bold">25</span>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-900">Workshop React</h4>
            <p className="mt-1 text-xs text-gray-500">14:00 - Salle Algebre</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <div className="bg-azure-100 flex h-12 w-12 flex-col items-center justify-center rounded-lg">
            <span className="text-azure-600 text-xs font-medium">JUL</span>
            <span className="text-azure-700 text-sm font-bold">18</span>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-900">Hackathon Intra-HEI</h4>
            <p className="mt-1 text-xs text-gray-500">Vendredi - Salle Algebre</p>
          </div>
        </div>
      </div>
    </div>
  );
}
