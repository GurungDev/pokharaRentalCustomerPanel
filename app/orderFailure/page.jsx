"use client";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import React from "react";
import failure from "@/animation/failure.json";

const FailOrder = () => {
  const { push } = useRouter();
  return (
    <div className="pb-20 my-[20vh]">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[20%] m-auto  ">
          <Lottie animationData={failure} loop={true} />
        </div>
        <div className="w-[50%] text-justify m-auto">
          <h1 className=" text-center font-extrabold text-[1.5rem] mb-5">
            Order Failed
          </h1>
          <p className="text-center text-[.9rem] ">
            We regret to inform you that your order was unsuccessful. We
            apologize for any inconvenience this may have caused. If you require
            further assistance, please don&apos;t hesitate to contact us.
          </p>
        </div>
        <div>
          {" "}
          <button
            onClick={() => {
              push("/");
            }}
            className="flex shadow-md items-center gap-2 rounded-md mt-3 text-[.9rem] font-semibold text-red-600 hover:bg-red-600 duration-300 border-2 border-red-600 hover:text-white py-2 px-10 "
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default FailOrder;
