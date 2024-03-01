"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import ConnectCompany from "./connectBanner";
import Footer from "./footer";
import ScrollToTopButton from "./goToTop";
import Navbar from "./navbar";
import { Toaster } from "./ui/toaster";

import NavbarAuth from "./authNavbar";
import AuthProvider from "./authProvider";

const StoreProvider = ({ children }) => {
  const state = store.getState();
  return (
    <Provider store={store}>
     {state?.account?.loginStatus == true && state?.account?.token != null ? (
        <NavbarAuth />
      ) : (
        <Navbar />
      )}
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
