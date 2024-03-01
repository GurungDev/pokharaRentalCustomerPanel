"use client";
import register from "@/animation/register.json";
import RegisterForm from "./registerForm";
import Lottie from "lottie-react";
 
 
const RegisterComponent = () => {
  
  return (
    <div className="flex items-center justify-centerw-full min-h-[100vh] ">
      <div className=" min-[1000px]:flex layout  items-center justify-between  ">
        <div className=" w-full">
          <RegisterForm/>
        <div>
   
    </div>
        </div>
        <div className=" min-[1300px]:w-[70%] hidden min-[1000px]:flex justify-end ">
        <Lottie animationData={register} loop={true} />;
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
