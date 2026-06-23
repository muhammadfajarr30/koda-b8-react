import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const authContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage("account");
  const login = (userData) => {
      setUser(userData);
      console.log(userData)
  };
  const logout = () => {
    setUser([]);
  };
  const isLoggedIn = Array.isArray(user) ? user.length > 0 : !!user;

  return (
    <authContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
    return useContext(authContext)
}
export default authContext;
