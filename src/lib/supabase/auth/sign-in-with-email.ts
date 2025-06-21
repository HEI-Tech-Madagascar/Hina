import supabase from '@/lib/supabase/client';

export async function signInWithEmail(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      if (error.message === 'Invalid login credentials') {
        throw new Error("Vous avez fourni des données erronées :')");
      }
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    throw error;
  }
}
