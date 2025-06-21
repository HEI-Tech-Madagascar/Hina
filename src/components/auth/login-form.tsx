import {
  Alert,
  AlertDescription,
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
} from '@/components';
import { useState } from 'react';
import { Eye, EyeOff, Mail, User } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { type LoginData, loginSchema } from '@/components/auth/utils/login-schema';
import { signInWithEmail, signInWithStd } from '@/lib/supabase/auth';

const EmailField = ({ register, error, disabled }: any) => (
  <div className="space-y-2">
    <Label htmlFor="email">Adresse email</Label>
    <Input id="email" type="email" placeholder="votre.email@example.com" {...register('email')} disabled={disabled} />
    {error && <p className="text-xs text-red-600">{error.message}</p>}
  </div>
);

const StdField = ({ register, error, disabled }: any) => (
  <div className="space-y-2">
    <Label htmlFor="std">Identifiant étudiant (STD)</Label>
    <Input id="std" type="text" placeholder="STD12345" {...register('std')} disabled={disabled} />
    {error && <p className="text-xs text-red-600">{error.message}</p>}
  </div>
);

const PasswordField = ({
  register,
  error,
  disabled,
  show,
  toggle,
}: {
  register: any;
  error: any;
  disabled: boolean;
  show: boolean;
  toggle: () => void;
}) => (
  <div className="space-y-2">
    <Label htmlFor="password">Mot de passe</Label>
    <div className="relative">
      <Input
        id="password"
        type={show ? 'text' : 'password'}
        placeholder="••••••••"
        {...register('password')}
        disabled={disabled}
        className="pr-10"
      />
      <button
        type="button"
        onClick={toggle}
        className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400 hover:text-slate-600"
      >
        {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
    {error && <p className="text-xs text-red-600">{error.message}</p>}
  </div>
);

export default function LoginForm() {
  const [loginType, setLoginType] = useState<'email' | 'std'>('email');
  const [showPassword, setShowPassword] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: LoginData) => {
    setGeneralError(null);

    try {
      if (loginType === 'email' && !data.email) {
        throw new Error('Adresse email requise');
      }
      if (loginType === 'std' && !data.std) {
        throw new Error('Identifiant STD requis');
      }

      let user;
      if (loginType === 'email') {
        user = await signInWithEmail(data.email!, data.password);
      } else {
        user = await signInWithStd(data.std!, data.password);
      }

      if (user) {
        navigate('/app');
      } else {
        throw new Error('Échec de la connexion');
      }
    } catch (err: any) {
      setGeneralError(err.message || 'Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <section className="animate-slide-in-left">
      <Card className="mx-auto w-full max-w-full border-0 bg-white/95 shadow-xl backdrop-blur-sm">
        <CardHeader className="space-y-1 pb-4">
          <CardTitle className="from-azure-600 to-ocean-600 bg-gradient-to-r bg-clip-text text-center text-2xl font-bold text-transparent">
            Connexion
          </CardTitle>
          <CardDescription className="text-center text-slate-600">Accédez à votre compte étudiant</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={loginType} onValueChange={(value) => setLoginType(value as 'email' | 'std')} className="w-full">
            <TabsList className="mb-4 grid w-full grid-cols-2 bg-slate-100">
              <TabsTrigger value="email" className="data-[state=active]:bg-azure-500 data-[state=active]:text-white">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </TabsTrigger>
              <TabsTrigger value="std" className="data-[state=active]:bg-azure-500 data-[state=active]:text-white">
                <User className="mr-2 h-4 w-4" />
                STD
              </TabsTrigger>
            </TabsList>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {loginType === 'email' && (
                <TabsContent value="email">
                  <EmailField register={register} error={errors.email} disabled={isSubmitting} />
                </TabsContent>
              )}
              {loginType === 'std' && (
                <TabsContent value="std">
                  <StdField register={register} error={errors.std} disabled={isSubmitting} />
                </TabsContent>
              )}
              <PasswordField
                register={register}
                error={errors.password}
                disabled={isSubmitting}
                show={showPassword}
                toggle={() => setShowPassword((s) => !s)}
              />
              {generalError && (
                <Alert className="animate-fade-in border-red-200 bg-red-50">
                  <AlertDescription className="text-red-700">{generalError}</AlertDescription>
                </Alert>
              )}
              <Button
                type="submit"
                className="from-azure-500 to-ocean-500 hover:from-azure-600 hover:to-ocean-600 w-full bg-gradient-to-r py-2.5 text-white transition-all duration-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Connexion...' : 'Se connecter'}
              </Button>
            </form>
          </Tabs>
        </CardContent>
        <a href="/forget-password" className="text-azure-600 text-center text-sm hover:underline">
          Mot de passe oublié ?
        </a>
        <div className="animate-fade-in space-y-3 text-center">
          <div className="mx-auto h-px w-16 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <p className="text-sm text-slate-600">Vous n'avez pas de compte ?</p>
          <Button
            onClick={() => navigate('/register')}
            variant="ghost"
            className="text-azure-600 hover:text-azure-700 hover:bg-azure-50 font-medium transition-all duration-200"
          >
            Créer un compte
          </Button>
        </div>
      </Card>
    </section>
  );
}
