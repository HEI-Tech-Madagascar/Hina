import { Button } from '@/components/ui/button';
import type { FC } from 'react';

type AuthToggleProps = {
  isLogin: boolean;
  onToggle: () => void;
  isLoading?: boolean;
};

export const AuthToggle: FC<AuthToggleProps> = ({ isLogin, onToggle, isLoading = false }) => {
  return (
    <div className="text-center space-y-3 animate-fade-in">
      <div className="w-16 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto" />
      <p className="text-sm text-slate-600">{isLogin ? "Vous n'avez pas de compte ?" : 'Vous avez déjà un compte ?'}</p>
      <Button
        variant="ghost"
        onClick={onToggle}
        disabled={isLoading}
        className="text-azure-600 hover:text-azure-700 hover:bg-azure-50 font-medium transition-all duration-200"
      >
        {isLogin ? 'Créer un compte' : 'Se connecter'}
      </Button>
    </div>
  );
};
