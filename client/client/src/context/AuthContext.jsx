import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "./supabaseClient"; // adjust the path as needed
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    // Fetch initial user session from Supabase
    const fetchUser = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();

        if (error) throw error;

        if (session?.user) {
          setUser(session.user);

          // Optional: if you still want to fetch extra profile data from backend
          try {
            const res = await axios.get(`${backendUrl}/api/auth/profile`, {
              headers: {
                Authorization: `Bearer ${session.access_token}`,
              },
            });
            setUser({
              ...session.user,
              profile: res.data.data,
            });
          } catch (backendError) {
            console.warn("Backend profile fetch failed:", backendError.message);
          }

        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("Error fetching Supabase user:", err.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    // Real-time listener for login/logout/session changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    // Cleanup listener on unmount
    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, backendUrl, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
