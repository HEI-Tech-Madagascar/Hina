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
import { Eye, EyeOff, Mail, User } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const loginSchema = z
  .object({
    email: z.string().email('Email invalide').optional(),
    std: z.string().min(3, 'STD invalide').optional(),
    password: z.string().min(6, 'Mot de passe trop court'),
  })
  .refine((data) => data.email || data.std, {
    message: 'Email ou STD requis',
    path: ['email'],
  });

type LoginFormValues = z.infer<typeof loginSchema>;

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
        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
      >
        {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
      </button>
    </div>
    {error && <p className="text-xs text-red-600">{error.message}</p>}
  </div>
);

export const LoginForm = () => {
  const [loginType, setLoginType] = useState<'email' | 'std'>('email');
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    const type = data.email ? 'email' : 'std';
    console.log(`Connexion via ${type}`, data);
  };

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

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-azure-500 to-ocean-500 hover:from-azure-600 hover:to-ocean-600 text-white py-2.5 transition-all duration-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Connexion...' : 'Se connecter'}
              </Button>
            </form>
          </Tabs>

          <div className="text-center">
            <button className="text-sm text-azure-600 hover:underline">Mot de passe oublié ?</button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
