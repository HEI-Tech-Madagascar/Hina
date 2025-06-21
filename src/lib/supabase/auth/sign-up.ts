import supabase from '@/lib/supabase/client';

export async function signUp(
  username: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  std: string
): Promise<{ needsEmailConfirmation: boolean }> {
  const { data: stdCheck, error: stdCheckError } = await supabase
    .from('users')
    .select('std')
    .eq('std', std)
    .maybeSingle();

  if (stdCheckError) {
    throw new Error(
      `Erreur lors de la vérification du STD: ${stdCheckError.message ?? stdCheckError.details ?? stdCheckError.code ?? 'Erreur inconnue'}`
    );
  }

  if (stdCheck) {
    throw new Error('Ce STD est déjà enregistré.');
  }

  const { data, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
        display_name: `${firstName} ${lastName}`,
        std: std.toUpperCase(),
        username,
      },
    },
  });

  if (signUpError) {
    throw new Error(
      `Erreur lors de la création du compte: ${signUpError.message ?? signUpError.name ?? signUpError.code ?? 'Erreur inconnue'}`
    );
  }

  const needsEmailConfirmation = !data.session;

  const { error: insertError } = await supabase.from('users').insert({
    id: data.user?.id,
    username,
    first_name: firstName,
    last_name: lastName,
    email,
    std: std.toUpperCase(),
  });

  if (insertError) {
    throw new Error(
      `Erreur lors de l'enregistrement de l'utilisateur: ${insertError.message ?? insertError.details ?? insertError.code ?? 'Erreur inconnue'}`
    );
  }

  return { needsEmailConfirmation };
}
