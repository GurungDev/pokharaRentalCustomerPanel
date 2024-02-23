"use client";
import React from "react";
import { Toaster } from "./ui/toaster";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Navbar from "./navbar";
import ScrollToTopButton from "./goToTop";
import Footer from "./footer";
import ConnectCompany from "./connectBanner";

import NavbarAuth from "./authNavbar";
import Navprovider from "./navprovider";
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
      <ConnectCompany />
      <Footer />
      <Toaster />
      <ScrollToTopButton />
    </Provider>
  );
};

export default StoreProvider;
