import supabase from '@/lib/supabase/client';

export async function signInWithStd(std: string, password: string) {
  try {
    const { data, error: userError } = await supabase.from('users').select('email').ilike('std', std).single();

    if (userError || !data) {
      throw new Error('STD not found');
    }

    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    throw error;
  }
}
