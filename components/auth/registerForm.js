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

import { Fragment, useContext } from "react";
import { StateContext } from "../../app/auth/page";
import { Dialog, Transition } from "@headlessui/react";
 
export default function RegisterForm() {
  const { toast } = useToast();
  const { push } = useRouter();
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
        <form className="grid gap-7   my-5 py-10 px-20  ">
          <div className="">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Pokhara Rental
            </h1>
            <small className="">Register your account</small>
          </div>
          <div className="flex justify-between gap-10">
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
                      <Input placeholder="password" {...field} />
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

          {/* <Button className="btn" onClick={()=>setIsOtpModelOpen(true)}>
            {" "}
            Send Otp
          </Button> */}

          {/* <Button className="btn" onClick={() => form.handleSubmit(onSubmit)}>
            {" "}
            Register
          </Button> */}

          <Button
            className="btn"
            onClick={registerForm.handleSubmit(onRegisterFormSubmit)}
          >
            {" "}
            Register
          </Button>

          <Transition appear show={isOtpModelOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              onClose={() => setIsOtpModelOpen(false)}
            >
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
                                  <Input placeholder="OTP" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="mt-4">
                            <button
                              type="submit"
                              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              onClick={registerFormAlognWithOtp.handleSubmit(
                                onRegisterFormAlongWithOtpSubmit
                              )}
                            >
                              Got it, thanks!
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
