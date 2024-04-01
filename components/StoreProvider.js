"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import Footer from "./footer";
import ScrollToTopButton from "./goToTop";
import { Toaster } from "./ui/toaster";

import NavbarComponent from "./authProvider";

const StoreProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <NavbarComponent />

      <div className="mt-8">{children}</div>

      <Footer />
      <Toaster />
      <ScrollToTopButton />
    </Provider>
  );
};

export default StoreProvider;
