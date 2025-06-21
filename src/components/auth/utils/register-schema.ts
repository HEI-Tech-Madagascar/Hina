import { z } from 'zod';

export const registerSchema = z
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

export type RegisterData = z.infer<typeof registerSchema>;
