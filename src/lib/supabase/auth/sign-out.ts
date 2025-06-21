import supabase from '@/lib/supabase/client';

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error('Error signing out: ' + error.message);
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
}
