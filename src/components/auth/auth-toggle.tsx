import { Button } from '@/components/ui/button';

export const AuthToggle = () => {
  return (
    <div className="text-center space-y-3 animate-fade-in">
      <div className="w-16 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto" />
      <p className="text-sm text-slate-600">Vous n'avez pas de compte ?</p>
      <Button
        variant="ghost"
        className="text-azure-600 hover:text-azure-700 hover:bg-azure-50 font-medium transition-all duration-200"
      >
        Créer un compte
      </Button>
    </div>
  );
};
