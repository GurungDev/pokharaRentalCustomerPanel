import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, {
    message: " must be at least 3 characters.",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .regex(
      /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g,
      "Invalid Phone Number"
    ),
  description:  z.string().min(10, {
    message: " must be at least 10 characters.",
  }),
});

export const registerFormSchema = z.object({
  email: z.string().email({
    message: "Invalid email format.",
  }),
  name: z.string().min(3, {
    message: " must be at least 3 characters.",
  }),
  phoneNumber: z
    .string()
    .regex(
      new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/),
      "Invalid Number!"
    ),

  password: z.string({ message: "must be string" }).min(5, {
    message: " must be at least 5 characters.",
  }),
});

export const registerFormAlongWithOtpSchema = z.object({
  otp: z.string().min(3, {
    message: " must be at least 3 characters.",
  }),
});

export const loginFormSchema = z.object({
  email: z.string().email({
    message: "Invalid email format.",
  }),

  password: z.string({ message: "must be string" }).min(5, {
    message: " must be at least 5 characters.",
  }),
});
