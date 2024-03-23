"use client"
import contactAnimation from "../../animation/contact.json";
import ContactForm from "../../components/contact/contactForm";
import Lottie from "lottie-react";

export default function FormPage() {
  return (
    <div className="layout m-auto">
      <div className="grid lg:grid-cols-6  gap-14  mt-[10vh]">
        <div className="lg:col-span-4 py-10 lg:order-first">
          <ContactForm />
        </div>
        <div className="lg:col-span-2 lg:py-20 order-first ">
               <Lottie animationData={contactAnimation} loop={true} />
        </div>
      </div>
      <div className="grid grid-cols-1 my-5 lg:grid-cols-2">
        <div className="  text-text  py-6  ">
          <h1 className="text-3xl font-[500] "> Headquaters</h1>
          <div className=" text-[#5f6368] mt-3">
            <p className="">NGR company Ltd.</p>
            <p className=" ">5 parsyang, Pokhara, Nepal</p>
          </div>
        </div>
        <div className="  text-text  py-6    ">
          <h1 className="text-3xl   font-[500] "> Join us</h1>
          <div className=" text-[#5f6368] mt-3">
            <p className=" ">Find out more about career at Pokhara rentals.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
