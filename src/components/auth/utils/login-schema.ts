import { z } from 'zod';

export const loginSchema = z
  .object({
    email: z.string().email('Email invalide').optional(),
    std: z.string().min(3, 'STD invalide').optional(),
    password: z.string().min(6, 'Mot de passe trop court'),
  })
  .refine((data) => data.email || data.std, {
    message: 'Email ou STD requis',
    path: ['email'],
  });

export type LoginData = z.infer<typeof loginSchema>;
