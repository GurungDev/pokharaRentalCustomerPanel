import Lottie from "lottie-react";
import React from "react";
import login from "../../animation/login.json";
import LoginForm from "./loginForm";

const LoginComponent = () => {
  return (
    <div className="flex items-center justify-centerw-full min-h-[100vh] ">
      <div className=" min-[1000px]:flex layout  items-center justify-between  ">
        <div className=" w-full">
          <LoginForm />
        </div>
        <div className=" min-[1300px]:w-full hidden min-[1000px]:flex justify-end ">
          {/* <Image src="/login-customer.jpg" width={300} height={300} /> */}
          <Lottie animationData={login} loop={true} />;
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
