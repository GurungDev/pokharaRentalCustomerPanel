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

export default function LoginForm() {
  const {
    rememberMe,
    setRememberMe,
    loginForm,
    onLoginFormSubmit
  } = useContext(StateContext);
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
                  <Input placeholder="password" {...field} />
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
          </div>

          <Button type="submit" className="btn">
            Login
          </Button>
        </form>
      </Form>
    </main>
  );

}
