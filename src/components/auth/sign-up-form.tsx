import { useState, type FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, EyeOff, Check } from 'lucide-react';
import { signUp } from '@/lib/auth/actions';

type SignupFormProps = {
  onSuccess?: () => void;
};

const signupSchema = z
  .object({
    firstName: z.string().min(2, 'Prénom trop court (min. 2 caractères)'),
    lastName: z.string().min(2, 'Nom trop court (min. 2 caractères)'),
    std: z.string().min(8, 'STD doit être au format STDXXXXX'),
    username: z
      .string()
      .min(3, "Nom d'utilisateur trop court")
      .regex(/^[a-zA-Z0-9_]+$/, 'Seuls les lettres, chiffres et _ sont autorisés'),
    email: z.string().email('Format email invalide'),
    password: z
      .string()
      .min(8, 'Mot de passe trop court')
      .regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Doit contenir majuscule, minuscule et chiffre'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Les mots de passe ne correspondent pas',
  });

type SignupFormData = z.infer<typeof signupSchema>;

export const SignupForm: FC<SignupFormProps> = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [generalError, setGeneralError] = useState('');

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

  const onSubmit = async (data: SignupFormData) => {
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
        alert('Veuillez checker votre mail pour confirmer votre compte');
      }
      onSuccess?.();
    } catch (err) {
      console.error('Erreur lors de l’inscription:', err);

      let rawMessage = 'Une erreur est survenue lors de l’inscription';

      if (err instanceof Error) {
        rawMessage = err.message;
      } else if (typeof err === 'string') {
        rawMessage = err;
      } else if (typeof err === 'object' && err !== null && 'message' in err) {
        rawMessage = String((err as any).message);
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
      <Card className="w-full max-w-md mx-auto shadow-xl border-0 bg-white/95 backdrop-blur-sm">
        <CardHeader className="space-y-1 pb-4">
          <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-azure-600 to-ocean-600 bg-clip-text text-transparent">
            Inscription
          </CardTitle>
          <CardDescription className="text-center text-slate-600">Créez votre compte étudiant</CardDescription>
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
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
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
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  {confirmPassword && confirmPassword === password && <Check className="w-4 h-4 text-green-500" />}
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-slate-400"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              {errors.confirmPassword && <p className="text-xs text-red-600">{errors.confirmPassword.message}</p>}
            </div>

            {generalError && (
              <Alert className="border-red-200 bg-red-50 animate-fade-in">
                <AlertDescription className="text-red-700">{generalError}</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-azure-500 to-ocean-500 text-white py-2.5"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Inscription...
                </div>
              ) : (
                'Créer mon compte'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};
