export default function RightPanelDescription() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center p-8 text-white xl:p-12">
      <div className="space-y-8 text-center">
        <div className="inline-flex items-center rounded-full border border-white/20 bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
          <span className="mr-2 h-2 w-2 rounded-full bg-green-400" />
          Plateforme active
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl leading-tight font-bold xl:text-5xl">
            Votre espace étudiante
            <span className="text-azure-200 block">tout-en-un</span>
          </h2>
          <p className="text-azure-100 text-lg leading-relaxed opacity-90">
            Accédez aux actualités du club HEI Tech Madagascar, gérez vos projets, vos tâches et collaborez avec vos
            camarades dans un environnement moderne et intuitif.
          </p>
        </div>
      </div>
    </div>
  );
}
