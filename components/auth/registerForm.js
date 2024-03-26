"use client";

import { useRouter } from "next/navigation";
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
import { useToast } from "../../components/ui/use-toast";

import { Fragment, useContext, useState } from "react";
import { StateContext } from "../../app/auth/page";
import { Dialog, Transition } from "@headlessui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Timer from "../timer";

export default function RegisterForm() {
  const { toast } = useToast();
  const { push } = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const {
    isOtpModelOpen,
    setIsOtpModelOpen,
    registerForm,
    onRegisterFormSubmit,
    registerFormAlognWithOtp,
    onRegisterFormAlongWithOtpSubmit,
  } = useContext(StateContext);

  return (
    <div>
      <Form {...registerForm}>
        <form className="grid gap-7   my-5 py-10 px-14  ">
          <div className="">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Pokhara Rental
            </h1>
            <small className="">Register your account</small>
          </div>
          <div className="grid grid-cols-2 justify-between gap-10">
            <div className="grow grid gap-7">
              <FormField
                control={registerForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={registerForm.control}
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
            </div>

            <div className="grow grid gap-7">
              <FormField
                control={registerForm.control}
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
                control={registerForm.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="phoneNumber" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button
            className="btn"
            onClick={registerForm.handleSubmit(onRegisterFormSubmit)}
          >
            {" "}
            Register
          </Button>

          <Transition appear show={isOtpModelOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => {}}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        OTP
                      </Dialog.Title>
                      <Form {...registerFormAlognWithOtp}>
                        <form>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500 mb-2">
                              OTP has been sent to your email. Please verify !!
                            </p>
                          </div>
                          <FormField
                            control={registerFormAlognWithOtp.control}
                            name="otp"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input placeholder="Your Otp" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="my-3">
                            <Timer
                              onSendOTPFormSubmit={registerForm.handleSubmit(
                                onRegisterFormSubmit
                              )}
                            />
                          </div>
                          <div className="mt-4 flex items-center justify-between">
                            <button
                              type="submit"
                              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              onClick={registerFormAlognWithOtp.handleSubmit(
                                onRegisterFormAlongWithOtpSubmit
                              )}
                            >
                              Submit
                            </button>
                            <button
                              type="submit"
                              className="  justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                              onClick={() => setIsOtpModelOpen(false)}
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </Form>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </form>
      </Form>
    </div>
  );
}
