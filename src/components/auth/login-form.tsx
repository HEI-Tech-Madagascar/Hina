import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui';
import { Eye, Mail, User } from 'lucide-react';
import { useState } from 'react';

const EmailLoginFields = () => (
  <TabsContent value="email" className="space-y-4 mt-0">
    <div className="space-y-2">
      <Label htmlFor="email" className="text-sm font-medium text-slate-700">
        Adresse email
      </Label>
      <Input
        id="email"
        type="email"
        placeholder="votre.email@example.com"
        className="transition-all duration-200 border-slate-300 focus-visible:ring-azure-500"
      />
    </div>
  </TabsContent>
);

const StdLoginFields = () => (
  <TabsContent value="std" className="space-y-4 mt-0">
    <div className="space-y-2">
      <Label htmlFor="std" className="text-sm font-medium text-slate-700">
        Identifiant étudiant (STD)
      </Label>
      <Input
        id="std"
        type="text"
        placeholder="STD12345"
        className="transition-all duration-200 border-slate-300 focus-visible:ring-azure-500"
      />
    </div>
  </TabsContent>
);

const PasswordField = () => (
  <div className="space-y-2">
    <Label htmlFor="password" className="text-sm font-medium text-slate-700">
      Mot de passe
    </Label>
    <div className="relative">
      <Input
        id="password"
        type="password"
        placeholder="••••••••"
        className="transition-all duration-200 border-slate-300 focus-visible:ring-azure-500"
      />
      <button
        type="button"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
      >
        <Eye className="w-4 h-4" />
      </button>
    </div>
  </div>
);

export const LoginForm = () => {
  const [loginType, setLoginType] = useState<'email' | 'std'>('email');

  return (
    <section className="animate-slide-in-left">
      <Card className="w-full max-w-md mx-auto shadow-xl border-0 bg-white/95 backdrop-blur-sm">
        <CardHeader className="space-y-1 pb-4">
          <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-azure-600 to-ocean-600 bg-clip-text text-transparent">
            Connexion
          </CardTitle>
          <CardDescription className="text-center text-slate-600">Accédez à votre compte étudiant</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <Tabs value={loginType} onValueChange={(v) => setLoginType(v as 'email' | 'std')} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4 bg-slate-100">
              <TabsTrigger value="email" className="data-[state=active]:bg-azure-500 data-[state=active]:text-white">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </TabsTrigger>
              <TabsTrigger value="std" className="data-[state=active]:bg-azure-500 data-[state=active]:text-white">
                <User className="w-4 h-4 mr-2" />
                STD
              </TabsTrigger>
            </TabsList>

            <form className="space-y-4">
              <EmailLoginFields />
              <StdLoginFields />
              <PasswordField />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-azure-500 to-ocean-500 hover:from-azure-600 hover:to-ocean-600 text-white font-medium py-2.5 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Se connecter
              </Button>
            </form>
          </Tabs>

          <div className="text-center">
            <button className="text-sm text-azure-600 hover:text-azure-700 hover:underline transition-colors">
              Mot de passe oublié ?
            </button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
