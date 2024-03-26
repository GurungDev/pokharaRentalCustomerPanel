"use client";
import {
  getEmail,
  getName,
  getNumber,
  getToken,
  isUserLogin,
  resetlogin,
  setLoginInfo,
  setUserDetails,
} from "@/lib/storage.utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: getToken() || "",
  name: getName() || "",
  email: getEmail() || "",
  number: getNumber() || "",
  loginStatus: isUserLogin() || false,
};

export const accountSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.loginStatus = true;
      state.token = action.payload?.token;
      setLoginInfo({ ...action.payload });
    },

    setDetails: (state, action) => {
      state.name = action.payload?.name;
      state.email = action.payload?.email;
      state.number = action.payload?.number;
      setUserDetails({ ...action.payload });
    },

    resetLogin: (state) => {
      state.loginStatus = false;
      state.token = "";
      resetlogin();
    },
  },
});

export const { setLogin, resetLogin, setDetails } = accountSlice.actions;
export default accountSlice.reducer;
