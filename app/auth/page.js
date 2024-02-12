"use client";
import Slider from "@/components/auth/slider";
import { toast } from "@/components/ui/use-toast";
import {
  loginFormSchema,
  registerFormAlongWithOtpSchema,
  registerFormSchema,
} from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
export const StateContext = createContext();
const AuthPage = () => {
  const [isOtpModelOpen, setIsOtpModelOpen] = useState(false);

  const registerForm = useForm({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      name: "",
      phoneNumber: "",
      password: "",
    },
  });
  const registerFormAlognWithOtp = useForm({
    resolver: zodResolver(registerFormAlongWithOtpSchema),
    defaultValues: {
      otp: "",
    },
  });
  const loginForm = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onRegisterFormAlongWithOtpSubmit(values) {
    try {
      // const res = await RegisterStore({
      //   email: values.email,
      //   password: values.password,
      //   name: values.name,
      //   location: values.location,
      //   ownerName: values.ownerName,
      //   phoneNumber: values.phoneNumber,
      //   validateFor: "store",
      // });
      let data = { otp: values.otp, name: registerForm.getValues() };
      console.log(data);
      setIsOtpModelOpen(false);
      if (!res) {
        //   throw new Error(400, "Something went wrong");
        // }
        // push("/admin/dashboard");
        // toast({
        //   title: "Login sucess",
        // });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: error.response?.data?.message || "Something went wrong",
      });
    }
  }

  async function onRegisterFormSubmit(values) {
    try {
      // const res = await RegisterStore({
      //   email: values.email,
      //   password: values.password,
      //   name: values.name,
      //   location: values.location,
      //   ownerName: values.ownerName,
      //   phoneNumber: values.phoneNumber,
      //   validateFor: "store",
      // });
      setIsOtpModelOpen(true);
      if (!res) {
        //   throw new Error(400, "Something went wrong");
        // }
        // push("/admin/dashboard");
        // toast({
        //   title: "Login sucess",
        // });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: error.response?.data?.message || "Something went wrong",
      });
    }
  }

  async function onLoginFormSubmit(values) {
    // try {
    // //    const res = await loginUser({"email": values.email, "password": values.password,  "validateFor": "store"});
    //    if(!res){
    //     throw new Error(400, "Something went wrong")
    //   }
    //   dispatch(setLogin({token: res?.data?.token, isRememberMe: rememberMe}))
    //   push("/store/dashboard")
    //   toast({
    //     title: "Login sucess"})
    // } catch (error) {
    //   toast({
    //     variant: "destructive",
    //     title: "Login failed",
    //     description: error.response?.data?.message || "Something went wrong"})
    // }
  }

  return (
    <div className="h-[100vh] w-full  ">
      <StateContext.Provider
        value={{
          isOtpModelOpen,
          setIsOtpModelOpen,
          loginForm,
          registerForm,
          onLoginFormSubmit,
          onRegisterFormSubmit,
          registerFormAlognWithOtp,
          onRegisterFormAlongWithOtpSubmit,
        }}
      >
        {" "}
        <Slider />
      </StateContext.Provider>
    </div>
  );
};

export default AuthPage;
