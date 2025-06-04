import supabase from './client';

export async function getSession() {
  try {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error) {
      throw new Error(`Error getting session: ${error.message}`);
    }

    return session;
  } catch (error) {
    console.error('Error fetching session:', error);
    return null;
  }
}
