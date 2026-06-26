import { useContext } from 'react';
import AuthContext from "../context/AuthContext";

const useAuth = () => { 
  const {users, setUsers, account, setAccount} = useContext(AuthContext)

  return { 
    users, 
    setUsers,
    account,
    setAccount,
  }
}

export default useAuth;