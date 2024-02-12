"use client";
import React from "react";
import { Toaster } from "./ui/toaster";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const AuthLayoutComponent = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
      <Toaster />
    </Provider>
  );
};

export default AuthLayoutComponent;
