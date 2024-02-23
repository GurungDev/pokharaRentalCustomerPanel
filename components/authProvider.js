import { store } from "@/redux/store";
import { getDetails } from "@/services/auth/login.service";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  auth: null,
  setAuth: () => {},
  user: null,
  setUser: () => {},
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const state = store.getState();
  const [auth, setAuth] = useState(
    state.account.loginStatus == true && state.account.token != null
  );
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth,setUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
