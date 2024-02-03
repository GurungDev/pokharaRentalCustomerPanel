"use client";
import React from "react";
import { Toaster } from "./ui/toaster";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Navbar from "./navbar";
import ScrollToTopButton from "./goToTop";
import Footer from "./footer";
import ConnectCompany from "./connectBanner";

const StoreProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <Navbar/>
      { children }
      <ConnectCompany/>
      <Footer/>
      <Toaster />
      <ScrollToTopButton/>
    </Provider>
  );
};

export default StoreProvider;
