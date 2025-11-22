//signup
const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  if (error) console.error(error)
  else console.log('User signed up:', data)
}


//login
const login = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  if (error) console.error(error)
  else console.log('User logged in:', data)
}


//logout
const logout = async () => {
  await supabase.auth.signOut()
}
