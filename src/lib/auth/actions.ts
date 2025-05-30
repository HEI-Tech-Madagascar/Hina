import supabase from '../supabase/client';

export async function signUp(displayName: string, username: string, email: string, password: string, std: string) {
  try {
    const { data: stdCheck, error: stdError } = await supabase.from('dummy-user').select('std').eq('std', std).single();

    if (stdCheck) {
      throw new Error('This STD is already registered');
    }

    if (stdError) {
      throw new Error('Error while trying to sign in with STD');
    }

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
          display_name: displayName,
          std: std.toUpperCase(),
        },
      },
    });

    if (signUpError) {
      throw new Error(`Error while signing up: ${signUpError.message}`);
    }

    const { error: registerUserInDBerror } = await supabase.from('dummy-user').insert({
      id: data.user?.id,
      display_name: displayName,
      username,
      email,
      std: std.toUpperCase(),
    });

    if (registerUserInDBerror) {
      throw new Error(`Error registering user: ${registerUserInDBerror.message}`);
    }
  } catch (error) {
    console.error('Sign up error:', error);
    throw error;
  }
}

export async function signInWithEmail(email: string, password: string) {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error('Sign in error:', error);
    throw error;
  }
}

export async function signInWithStd(std: string, password: string) {
  try {
    const { data, error: userError } = await supabase.from('dummy-user').select('email').ilike('std', std).single();

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
    console.error('Sign in error:', error);
    throw error;
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error('Error signing out: ' + error.message);
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
}
