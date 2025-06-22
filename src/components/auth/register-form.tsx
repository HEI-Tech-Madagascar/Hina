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
} from '@/components';
import { Check, Eye, EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { type RegisterData, registerSchema } from '@/components/auth/utils/register-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { signUp } from '@/lib/supabase/auth';
import { toast } from 'sonner';
import { MoonLoader } from 'react-spinners';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [generalError, setGeneralError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  const passwordStrength = (() => {
    let strength = 0;
    if (password?.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    return strength;
  })();

  const onSubmit = async (data: RegisterData) => {
    setGeneralError('');

    try {
      const { needsEmailConfirmation } = await signUp(
        data.username,
        data.firstName,
        data.lastName,
        data.email,
        data.password,
        data.std.toUpperCase()
      );

      if (needsEmailConfirmation) {
        toast.info('Veuillez checker votre mail pour confirmer votre compte', {
          className: 'font-poppins',
          duration: 5000,
        });
      } else {
        toast.success('Compte créé avec succès!', {
          className: 'font-poppins',
        });
      }
    } catch (error) {
      console.error('Erreur lors de l’inscription:', error);

      let rawMessage = 'Une erreur est survenue lors de l’inscription';

      if (error instanceof Error) {
        rawMessage = error.message;
      } else if (typeof error === 'string') {
        rawMessage = error;
      } else if (typeof error === 'object' && error !== null && 'message' in error) {
        rawMessage = String((error as any).message);
      }

      if (rawMessage.toLowerCase().includes('email')) {
        setGeneralError('Cette adresse email est déjà utilisée.');
      } else if (rawMessage.toLowerCase().includes('username')) {
        setGeneralError("Ce nom d'utilisateur est déjà pris.");
      } else {
        setGeneralError(rawMessage);
      }
    }
  };

  return (
    <section className="animate-slide-in-right">
      <Card className="mx-auto w-full max-w-full border-0 bg-white/95 shadow-xl backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800">
        <CardHeader className="space-y-1 pb-4">
          <CardTitle className="from-azure-600 to-ocean-600 bg-gradient-to-r bg-clip-text text-center text-2xl font-bold text-transparent">
            Inscription
          </CardTitle>
          <CardDescription className="text-center text-slate-600 dark:text-white">
            Créez votre compte étudiant
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom</Label>
                <Input id="firstName" {...register('firstName')} disabled={isSubmitting} />
                {errors.firstName && <p className="text-xs text-red-600">{errors.firstName.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom</Label>
                <Input id="lastName" {...register('lastName')} disabled={isSubmitting} />
                {errors.lastName && <p className="text-xs text-red-600">{errors.lastName.message}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="std">Identifiant étudiant (STD)</Label>
              <Input id="std" {...register('std')} disabled={isSubmitting} />
              {errors.std && <p className="text-xs text-red-600">{errors.std.message}</p>}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="username">Nom d'utilisateur</Label>
                <Input id="username" {...register('username')} disabled={isSubmitting} />
                {errors.username && <p className="text-xs text-red-600">{errors.username.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Adresse email</Label>
                <Input id="email" type="email" {...register('email')} disabled={isSubmitting} />
                {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  disabled={isSubmitting}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-slate-400"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {password && (
                <div className="space-y-1">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className={`h-1 flex-1 rounded-full ${
                          level <= passwordStrength
                            ? level <= 2
                              ? 'bg-red-400'
                              : level <= 3
                                ? 'bg-yellow-400'
                                : 'bg-green-400'
                            : 'bg-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600">
                    {passwordStrength <= 2 ? 'Faible' : passwordStrength === 3 ? 'Moyen' : 'Fort'}
                  </p>
                </div>
              )}
              {errors.password && <p className="text-xs text-red-600">{errors.password.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  {...register('confirmPassword')}
                  disabled={isSubmitting}
                  className="pr-10"
                />
                <div className="absolute top-1/2 right-3 flex -translate-y-1/2 items-center gap-2">
                  {confirmPassword && confirmPassword === password && <Check className="h-4 w-4 text-green-500" />}
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="cursor-pointer text-slate-400"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              {errors.confirmPassword && <p className="text-xs text-red-600">{errors.confirmPassword.message}</p>}
            </div>
            {generalError && (
              <Alert className="animate-fade-in border-red-200 bg-red-50">
                <AlertDescription className="text-red-700">{generalError}</AlertDescription>
              </Alert>
            )}
            <Button
              type="submit"
              className="from-azure-500 to-ocean-500 w-full cursor-pointer bg-gradient-to-r py-2.5 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? <MoonLoader size={18} color="white" /> : 'Créer mon compte'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
