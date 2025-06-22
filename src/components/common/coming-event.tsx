export default function ComintEvent() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800">
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Événements à venir</h3>
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <div className="bg-azure-100 dark:bg-azure-900/30 flex h-12 w-12 flex-col items-center justify-center rounded-lg">
            <span className="text-azure-600 dark:text-azure-400 text-xs font-medium">DEC</span>
            <span className="text-azure-700 dark:text-azure-300 text-sm font-bold">15</span>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white">Workshop React</h4>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">14:00 - Amphi A</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
            <span className="text-xs font-medium text-green-600 dark:text-green-400">DEC</span>
            <span className="text-sm font-bold text-green-700 dark:text-green-300">18</span>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white">Hackathon 48h</h4>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Vendredi - Lab Info</p>
          </div>
        </div>
      </div>
    </div>
  );
}
