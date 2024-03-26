"use client";

import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";

import { StateContext } from "../../app/auth/page";
import { Switch } from "../../components/ui/switch";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginForm() {
  const { rememberMe, setRememberMe, loginForm, onLoginFormSubmit } =
    useContext(StateContext);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const { push } = useRouter();
  return (
    <main className="w-full pt-10 m-auto h-full ">
      <Form {...loginForm}>
        <form
          className="grid gap-7  my-5 py-10 px-20  "
          onSubmit={loginForm.handleSubmit(onLoginFormSubmit)}
        >
          <div className="">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Pokhara Rental
            </h1>
            <small className="">Login into your account</small>
          </div>
          <FormField
            control={loginForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={loginForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="flex items-center   ">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
                      {...field}
                    />
                    <div
                      className="border-[1px] bg-neutral-800 text-white py-2 px-4 rounded-md"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <FaEyeSlash size={25} />
                      ) : (
                        <FaEye size={25} />
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex  justify-between items-center">
            <div className="flex gap-2 items-center">
              <Switch onClick={() => setRememberMe(!rememberMe)} />
              <small> Remember me </small>
            </div>

            <div
              onClick={() => push("/forgotPassword")}
              className="flex hover:translate-x-[-10px] duration-300 cursor-pointer gap-2 text-red-600 items-center"
            >
              <small> Forgot Password </small>
            </div>
          </div>

          <Button type="submit" className="btn">
            Login
          </Button>
        </form>
      </Form>
    </main>
  );
}
