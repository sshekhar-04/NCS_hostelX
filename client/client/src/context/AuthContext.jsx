import { createContext, useContext, useState,useEffect } from "react";
import axios from 'axios';
export const AuthContext = createContext();
//wraps your entire app and provides the auth data to all components inside
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // to stop the overLoading - > 
  const [loading,setLoading] = useState(true);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  useEffect(()=>{
    const loadUser = async() =>{
      const token = localStorage.getItem("accessToken");
      if(!token){
        setLoading(false);
        return  ;
      }
      try{
      const res = await axios.get(`${backendUrl}/api/auth/profile`,{
        headers  : {
           Authorization : `Bearer ${token}`,
        },
      });
      setUser(res.data.data);
      }catch(error){
    console.error(error.message);
    setUser(null);
      }finally{
        setLoading(false);
      };
    };
    loadUser();
  },[]);
  return (
    <AuthContext.Provider value={{ user, setUser,backendUrl ,loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
