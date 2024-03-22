"use client";
import { store } from "@/redux/store";
import { Suspense, useEffect, useState } from "react";
import { Provider } from "react-redux";
import Footer from "./footer";
import ScrollToTopButton from "./goToTop";
import Navbar from "./navbar";
import { Toaster } from "./ui/toaster";

import NavbarAuth from "./authNavbar";
import AuthProvider from "./authProvider";
 
const StoreProvider = ({ children }) => {
  const state = store.getState();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAuth(state.account.loginStatus == true && state.account.token != null);
    }
  }, [state]);

  return (
    <Provider store={store}>
      {auth ? <NavbarAuth /> : <Navbar />}
      <AuthProvider>
        <div className="mt-8">{children}</div>
      </AuthProvider>

      <Footer />
      <Toaster />
      <ScrollToTopButton />
    </Provider>
  );
};

export default StoreProvider;
