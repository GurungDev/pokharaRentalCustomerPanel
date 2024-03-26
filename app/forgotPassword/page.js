"use client";

import Timer from "@/components/timer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { OtpPurpose } from "@/lib/data";
import { OTPFORM, OTPPasswordChangeForm } from "@/lib/schemas";
import { ChangePassword, SendOtp } from "@/services/auth/sendOtp.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ForgotPassword = () => {
  const { push } = useRouter();
  const [otpForm, setOtpForm] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(null);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  async function onSendOTPFormSubmit(values) {
    try {
      const res = await SendOtp({
        email: values.email,
        phoneNumber: "1111111111",
        purpose: OtpPurpose.FORGOT_PASSWORD_CUSTOMER,
      });

      if (!res) {
        throw new Error(400, res?.messsage);
      }

      setOtpForm(false);
      setEmail(values?.email);
      toast({
        title: "OTP sent.",
      });
      OTPform.resetField();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed try again!",
        description: `User with email ${values.email} doesn't exists. Please signup.`,
      });
    }
  }

  async function onChangePasswordForm(values) {
    try {
      const res = await ChangePassword({
        email: email,
        password: values.password,
        otp: values.otp,
        purpose: OtpPurpose.FORGOT_PASSWORD_CUSTOMER,
      });

      if (!res) {
        throw new Error(400, res.data?.messsage);
      }

      toast({
        title: "Password Changed.",
      });
      ChangePasswordForm.resetField();
      push("/auth");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed try again!",
      });
    }
  }

  const OTPform = useForm({
    resolver: zodResolver(OTPFORM),
    defaultValues: {
      email: "",
    },
  });

  const ChangePasswordForm = useForm({
    resolver: zodResolver(OTPPasswordChangeForm),
    defaultValues: {
      password: "",
      otp: "",
    },
  });
  return (
    <main className=" lg:w-[40%] py-24   m-auto h-full ">
      <div className={`${otpForm ? "block" : "hidden"}`}>
        <Form {...OTPform}>
          <form
            className="grid gap-7  my-5 py-10 px-20  "
            onSubmit={OTPform.handleSubmit(onSendOTPFormSubmit)}
          >
            <div className="">
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Pokhara Rental
              </h1>
              <small className="">Forgot your password?</small>
            </div>
            <FormField
              control={OTPform.control}
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

            <Button type="submit" className="btn">
              Send OTP
            </Button>
          </form>
        </Form>
      </div>

      <div className={`${otpForm ? "hidden" : "block"}`}>
        <Form {...ChangePasswordForm}>
          <form
            className="grid gap-7  my-5 py-5 px-20  "
            onSubmit={ChangePasswordForm.handleSubmit(onChangePasswordForm)}
          >
            <div className="">
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Pokhara Rental
              </h1>
              <small className="">
                OTP is sent to your email. Check your email !
              </small>
            </div>

            <FormField
              control={ChangePasswordForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
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

            <FormField
              control={ChangePasswordForm.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>OTP</FormLabel>
                  <FormControl>
                    <Input placeholder="otp" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex  justify-between items-center">
             
              <Timer
                onSendOTPFormSubmit={() =>
                  onSendOTPFormSubmit({
                    email: email,
                  })
                }
              />
            </div>

            <Button type="submit" className="btn">
              Change Password
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
};
export default ForgotPassword;
