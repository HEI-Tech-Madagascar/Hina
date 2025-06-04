import { AuthToggle, LoginForm, SignUpForm } from '@/components/auth';

const HeroSection = () => (
  <div className="text-center mb-8 animate-fade-in">
    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-azure-500 to-ocean-500 rounded-2xl mb-4 shadow-lg">
      <span className="text-2xl font-bold text-white">H</span>
    </div>
    <h1 className="text-3xl font-bold bg-gradient-to-r from-azure-600 to-ocean-600 bg-clip-text text-transparent mb-2">
      Hina by HEI Tech
    </h1>
    <p className="text-slate-600 text-sm">Plateforme étudiante moderne</p>
  </div>
);

const FormSection = ({ isLogin }: { isLogin: boolean }) => (
  <div className="space-y-6">
    <div className="transform transition-all duration-300 ease-in-out">
      <div className={isLogin ? 'animate-slide-in-left' : 'animate-slide-in-right'}>
        {isLogin ? <LoginForm /> : <SignUpForm />}
      </div>
    </div>
    <AuthToggle />
  </div>
);

const LeftPanel = ({ isLogin }: { isLogin: boolean }) => (
  <div className="flex-1 flex items-center justify-center p-6 lg:p-8 bg-gradient-to-br from-azure-50/50 via-ocean-50/30 to-slate-100/50 relative">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-20 -left-16 w-40 h-40 lg:w-80 lg:h-80 bg-azure-200/15 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 left-1/4 w-40 h-40 lg:w-80 lg:h-80 bg-ocean-200/15 rounded-full blur-3xl" />
    </div>
    <div className="relative w-full max-w-md">
      <HeroSection />
      <FormSection isLogin={isLogin} />
    </div>
  </div>
);

const RightPanel = () => (
  <article className="hidden lg:flex flex-1 relative">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        alt="Étudiante utilisant un ordinateur portable"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-azure-600/90 via-azure-500/85 to-ocean-600/90" />
    </div>
    <div className="relative z-10 flex flex-col justify-center items-center text-white p-8 xl:p-12">
      <div className="text-center space-y-8">
        <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2" />
          Plateforme active
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl xl:text-5xl font-bold leading-tight">
            Bienvenue sur Hina
            <span className="block text-azure-200">Votre espace étudiante tout-en-un</span>
          </h2>
          <p className="text-azure-100 text-lg xl:text-xl leading-relaxed opacity-90">
            Accédez aux actualités du club HEI Tech Madagascar, gérez vos projets, vos tâches et collaborez avec vos
            camarades dans un environnement moderne et intuitif.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
            {['Étudiants', 'Cours', 'Satisfaction'].map((label) => (
              <div className="text-center" key={label}>
                <div className="text-2xl xl:text-3xl font-bold text-white">0</div>
                <div className="text-xs xl:text-sm text-azure-200">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </article>
);

export const Auth = () => {
  const isLogin = true;

  return (
    <section className="min-h-screen flex">
      <LeftPanel isLogin={isLogin} />
      <RightPanel />
    </section>
  );
};
