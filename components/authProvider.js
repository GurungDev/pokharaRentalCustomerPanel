"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./navbar";

import NavbarAuth from "./authNavbar";

const NavbarComponent = ({ children }) => {
  const { loginStatus, token } = useSelector((state) => state.account);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (loginStatus && token !== null) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    }
  }, [loginStatus, token]);

  return <>{auth ? <NavbarAuth /> : <Navbar />}</>;
};

export default NavbarComponent;
