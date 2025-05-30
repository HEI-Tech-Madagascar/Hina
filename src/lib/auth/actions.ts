import supabase from '../supabase/client';

export async function signUp(displayName: string, username: string, email: string, password: string) {
  try {
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
          display_name: displayName,
        },
      },
    });

    if (signUpError) {
      throw new Error(`Error while signing up user in supabase : ${signUpError}`);
    }

    const { error: registerUserInDBerror } = await supabase.from('dummy-user').insert({
      id: data.user?.id,
      display_name: displayName,
      username,
      email,
    });

    if (registerUserInDBerror) {
      throw new Error(`Error while registering the user in the database : ${registerUserInDBerror}`);
    }
  } catch (error) {
    console.error('Sign up error : ', error);
  }
}

export async function signIn(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log("You are signing in");
    if (error) {
      throw new Error(`${error.message}`);
    }
    console.log("Sign in successful:", data);
  } catch (error) {
    console.error("Sign in error:", error);
    throw error;
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error("Error while signing out : " + error);

    console.log("Sign out successful");
  } catch (error) {
    console.error("Error signing out:", error);
  }
}