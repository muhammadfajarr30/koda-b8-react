import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [users, setUsers] = useLocalStorage("data_users", []);
  const [account, setAccount] = useLocalStorage("account", null);
  
  useEffect(() => {
    if (account && users.length > 0) {
      const updatedUsers = users.map((user) =>
        user.email === account.email ? account : user
      );
      
      const hasChanged = JSON.stringify(updatedUsers) !== JSON.stringify(users);
      if (hasChanged) {
        setUsers(updatedUsers);
      }
    }
  }, [account]);
  
  const login = (userData) => {
    setAccount(userData);
  };

  const logout = () => {
    setAccount(null);
  };

  const updateAccount = (updatedAccount) => {
    setAccount(updatedAccount);

    // update database user
    const updatedUsers = users.map((user) =>
      user.email === updatedAccount.email
        ? updatedAccount
        : user
    );

    setUsers(updatedUsers);
  };

  const addToCart = (product) => {
    if (!account) return;

    const updatedAccount = {
      ...account,
      cart: [...(account.cart || []), product],
    };

    updateAccount(updatedAccount);
  };

  const removeFromCart = (productId) => {
    if (!account) return;

    const updatedAccount = {
      ...account,
      cart: account.cart.filter(
        (item) => item.id !== productId
      ),
    };

    updateAccount(updatedAccount);
  };

  const clearCart = () => {
    if (!account) return;

    const updatedAccount = {
      ...account,
      cart: [],
    };

    updateAccount(updatedAccount);
  };

  const isLoggedIn = !!account;

  return (
    <AuthContext.Provider
      value={{
        users,
        setUsers,
        account,
        setAccount,
        isLoggedIn,
        login,
        logout,
        updateAccount,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;