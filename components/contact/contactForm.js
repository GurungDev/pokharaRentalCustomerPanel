"use client";
import { contactSchema } from "@/lib/schemas";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Switch } from "../ui/switch";
import { Textarea } from "../ui/textarea";

const ContactForm = () => {
  const [accpetTerms, setAccpetTerms] = useState(false);
  const contactForm = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      description: "",
    },
  });

  const onSubmit = async (data) => {
    // try {
    //   if (message == "") throw new Error("Please type a message!!");
    //   if (!response) {
    //     throw new Error("Oops something went wrong. Try again !!");
    //   }
    //   toast.success("Email send successfully", { draggable: false });
    // } catch (error) {
    //   const errorMessage = (error).message;
    //   toast.error(errorMessage || "Oops something went wrong. Try again !!", {
    //     draggable: false,
    //   });
    // }
  };

  return (
    <Form {...contactForm}>
      <form className="" onSubmit={contactForm.handleSubmit(onSubmit)}>
        <div>
          <h1 className="text-[2rem]  md:text-[2.4rem]  lg:text-[45px]  min-[1900px]:text-[51px] leading-[30px] md:leading-[42px] text-text font-[500]      ">
            Drop us a message.
          </h1>
          <p className="  text-[#5f6368] my-10 paragraph min-[1900px]:text-[1.3rem] my-[1.5em]">
            Any queries or questions you may have, please do not hesitate to
            send us a message. We would love to hear from you.
          </p>
        </div>
        <div className=" grid grid-cols-1 gap-y-5 gap-x-4">
          <FormField
            control={contactForm.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={contactForm.control}
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
            control={contactForm.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="phone" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={contactForm.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Inquiry</FormLabel>
                <FormControl>
                  <Textarea placeholder="write your inquiry" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* <textarea
          id="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we help you?"
          className="px-3 py-3 rounded-md bg-zinc-200 border border-tertiary w-full font-medium text-black placeholder:text-black/60"
          rows={4}
          cols={50}
        ></textarea> */}
        <div className="flex items-center gap-2 my-5">
          <Switch onClick={() => setAccpetTerms(!accpetTerms)}></Switch>
          <p className="text-sm text-[#5f6368]">
            I am happy to receive emails about technologies and process my data
            for marketing purposes.
          </p>
        </div>
        <button
          type={accpetTerms ? "submit" : "button"}
          disabled={!accpetTerms}
          className={`${
            accpetTerms ? "btn bg-primary border-accent text-white" : " text-secondary"
          }  px-5 rounded border-2  py-1 `}
        >
          Submit
        </button>
      </form>
    </Form>
  );
};

export default ContactForm;
