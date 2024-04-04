"use client";
import success from "@/animation/success.json";
import { makeEsewaOrder, makeKhaltiOrder } from "@/services/order.service";
import Lottie from "lottie-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SuccessOrder = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("pidx");
  async function orderInKhalti() {
    try {
      await makeKhaltiOrder({
        pidx: search,
      });
    } catch (error) {}
  }
  useState(() => {
    orderInKhalti();
  }, []);
  return (
    <div className="pb-20 my-[20vh]">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[20%] m-auto  ">
          <Lottie animationData={success} loop={true} />
        </div>
        <div className="w-[50%] text-justify m-auto">
          <h1 className=" text-center font-extrabold text-[1.5rem] mb-5">
            Order placed successfully
          </h1>
          <p className="text-center text-[.9rem] ">
            Congratulations! Your order has been successfully placed. Thank you
            for choosing us. we&apos;re here to assist you further if needed.{" "}
          </p>
        </div>
        <div>
          {" "}
          <button
            onClick={() => {
              push("/");
            }}
            className="flex shadow-md items-center gap-2 rounded-md mt-3 text-[.9rem] font-semibold text-green-600 hover:bg-green-600 duration-300 border-2 border-green-600 hover:text-white py-2 px-10 "
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessOrder;
