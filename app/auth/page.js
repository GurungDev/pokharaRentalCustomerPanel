"use client";
  
  
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import SliderAuth from "../../components/auth/slider";
import { toast } from "../../components/ui/use-toast";
import { SendOtp } from "../../services/auth/sendOtp.service";
import { loginUser } from "../../services/auth/login.service";
import { Registeruser } from "../../services/auth/register.service";
import { store } from "@/redux/store";
import { loginFormSchema, registerFormAlongWithOtpSchema, registerFormSchema } from "@/lib/schemas";
export const StateContext = createContext();

const AuthPage = () => {
  const { push } = useRouter();
 
  const [isOtpModelOpen, setIsOtpModelOpen] = useState(false);
  const dispatch = useDispatch();
  const [rememberMe, setRememberMe] = useState(false);
  const state = store.getState();
  useEffect(() => {
    if (state.account.loginStatus == true && state.account.token != null) {
      push("/");
    }
  }, []);
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
      let data = {
        otp: values.otp,
        validateFor: "customer",
        ...registerForm.getValues(),
      };
     
      const res = await Registeruser(data);
      setIsOtpModelOpen(false);
      if (!res) {
        throw new Error(400, res?.data?.message);
      }
      toast({
        title: "Registered successfully",
      });
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
      const res = await SendOtp({
        email: values.email,
        phoneNumber: values.phoneNumber,
        purpose: OtpPurpose.SIGNUP_CUSTOMER,
      });
      setIsOtpModelOpen(true);
      if (!res) {
        throw new Error(400, res?.data?.message);
      }
      toast({
        title: "Otp sent",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: error.response?.data?.message || "Something went wrong",
      });
    }
  }

  async function onLoginFormSubmit(values) {
    try {
      const res = await loginUser({
        email: values.email,
        password: values.password,
        validateFor: "customer",
      });
      if (!res) {
        throw new Error(400, res.data?.messsage || "Something went wrong");
      }
     
      dispatch(setLogin({ token: res?.data?.token, isRememberMe: rememberMe }));
      push("/");
      toast({
        title: "Login sucess",
      });
      window.location.reload();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: error.response?.data?.message || "Something went wrong",
      });
    }
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
          rememberMe,
          setRememberMe,
        }}
      >
        {" "}
        <SliderAuth />
      </StateContext.Provider>
    </div>
  );
};

export default AuthPage;
