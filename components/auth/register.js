"use client";

import Image from "next/image";
import RegisterForm from "./registerForm";
 
 
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
          <Image src="/login-customer.jpg" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
