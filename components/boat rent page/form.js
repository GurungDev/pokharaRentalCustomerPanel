"use client";
import { useState } from "react";

const FormSectionConsultancy = () => {
  const [isResidental, setisResidental] = useState(true);
  const [isCommercial, setIsCommercial] = useState(false);

  const [oneStorey, setIsOneStorey] = useState(true);
  const [twoStorey, settwoStorey] = useState(false);
  const [threeStorey, setthreeStorey] = useState(false);
  const [fourStorey, setfourStorey] = useState(false);

  return (
    <div className=" w-[90%] bg-white  min-[1100px]:w-[55%] h-full m-auto shadow-md p-[1.5rem] min-[1100px]:p-[3rem] shadow-2xl">
      
      <div className="grid gap-[1rem] pb-[3rem]">
        <div className="">
          <p className="font-[600] caption mb-[0.25rem]">
          About your Home <span className="text-[#FD4349]">*</span>
          </p>
          <div className="">
            <div className="grid w-full min-[1100px]:grid-cols-2 gap-3">
              <div
                onClick={() => {
                  setisResidental(!isResidental), setIsCommercial(false);
                }}
                className={
                  isResidental
                    ? "flex gap-[1rem] items-center p-[1rem] bg-[#FD434914] border-[#FD4349] border-[1px]"
                    : "flex gap-[1rem] items-center p-[1rem] border-[#CACDD8] border-[1px]"
                }
              >
                <div
                  className={`${
                    isResidental ? "border-[#FD4349]" : "border-[#CACDD8]"
                  } border-[2px]  flex items-center justify-center rounded-full p-[4px]`}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      id="Ellipse 760"
                      cx="7"
                      cy="7"
                      r="7"
                      fill={isResidental ? "#FD4349" : ""}
                    />
                  </svg>
                </div>

                <label
                  className={`${
                    isResidental ? "text-[#FD4349]" : "text-[#4B5671]"
                  } w-full  caption leading-[2rem]`}
                >
                  Residental
                </label>
              </div>
              <div
                onClick={() => {
                  setIsCommercial(!isCommercial), setisResidental(false);
                }}
                className={
                  isCommercial
                    ? "flex gap-[1rem]   items-center p-[1rem] bg-[#FD434914] border-[#FD4349] border-[1px]"
                    : "flex gap-[1rem] items-center p-[1rem] border-[#CACDD8] border-[1px]"
                }
              >
                <div
                  className={`${
                    isCommercial ? "border-[#FD4349]" : "border-[#CACDD8]"
                  } border-[2px]  flex items-center justify-center rounded-full p-[4px]`}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      id="Ellipse 760"
                      cx="7"
                      cy="7"
                      r="7"
                      fill={isCommercial ? "#FD4349" : ""}
                    />
                  </svg>
                </div>

                <label
                  className={`${
                    isCommercial ? "text-[#FD4349]" : "text-[#4B5671]"
                  } w-full  caption leading-[2rem]`}
                >
                 Commercial
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <p className="font-[600] caption mb-[0.25rem]">
            Home Location <span className="text-[#FD4349]">*</span>
          </p>

          <input className="outline-none border-[2px] border-[#F4F4F6] py-[0.875rem] px-[1rem] w-full"></input>
        </div>

        <div className="">
          <p className="font-[600] caption mb-[0.25rem]">
            Number of Storey <span className="text-[#FD4349]">*</span>
          </p>
          <div className="">
            <div className="grid  grid-cols-2   min-[1200px]:grid-cols-4  min-[1350px]:grid-cols-5 gap-3">
              <div
                onClick={() => {
                  setIsOneStorey(!oneStorey), settwoStorey(false),setthreeStorey(false),setfourStorey(false);
                }}
                className={
                  oneStorey
                    ? "flex gap-[1rem] items-center py-[.5rem] px-[1rem] bg-[#FD434914] border-[#FD4349] border-[1px]"
                    : "flex gap-[1rem] items-center py-[.5rem] px-[1rem] border-[#CACDD8] border-[1px]"
                }
              >
                <label
                  className={`${
                    oneStorey ? "text-[#FD4349]" : "text-[#4B5671]"
                  } w-full  caption leading-[2rem]`}
                >
                  1 Storey
                </label>
              </div>
           
              <div
                onClick={() => {
                  settwoStorey(!twoStorey), setIsOneStorey(false),setthreeStorey(false),setfourStorey(false);
                }}
                className={
                  twoStorey
                  ? "flex gap-[1rem] items-center py-[.5rem] px-[1rem] bg-[#FD434914] border-[#FD4349] border-[1px]"
                  : "flex gap-[1rem] items-center py-[.5rem] px-[1rem] border-[#CACDD8] border-[1px]"
                }
              >
                <label
                  className={`${
                    twoStorey ? "text-[#FD4349]" : "text-[#4B5671]"
                  } w-full  caption leading-[2rem]`}
                >
                  2 Storey
                </label>
              </div>
              <div
                onClick={() => {
                  setthreeStorey(!threeStorey), settwoStorey(false),setIsOneStorey(false),setfourStorey(false);
                }}
                className={
                  threeStorey
                  ? "flex gap-[1rem] items-center py-[.5rem] px-[1rem] bg-[#FD434914] border-[#FD4349] border-[1px]"
                  : "flex gap-[1rem] items-center py-[.5rem] px-[1rem] border-[#CACDD8] border-[1px]"
                }
              >
                <label
                  className={`${
                    threeStorey ? "text-[#FD4349]" : "text-[#4B5671]"
                  } w-full  caption leading-[2rem]`}
                >
                  3 Storey
                </label>
              </div>
              <div
                onClick={() => {
                  setfourStorey(!fourStorey), settwoStorey(false),setthreeStorey(false),setIsOneStorey(false);
                }}
                className={
                  fourStorey
                  ? "flex gap-[1rem] items-center py-[.5rem] px-[1rem] bg-[#FD434914] border-[#FD4349] border-[1px]"
                  : "flex gap-[1rem] items-center py-[.5rem] px-[1rem] border-[#CACDD8] border-[1px]"
                }
              >
                <label
                  className={`${
                    fourStorey ? "text-[#FD4349]" : "text-[#4B5671]"
                  } w-full  caption leading-[2rem]`}
                >
                  4 & above
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <p className="font-[600] caption mb-[0.25rem]">
            Your Name <span className="text-[#FD4349]">*</span>
          </p>

          <input className="outline-none border-[2px] border-[#F4F4F6] py-[0.875rem] px-[1rem] w-full"></input>
        </div>

        <div className="">
          <p className="font-[600] caption mb-[0.25rem]">
            Contact Number <span className="text-[#FD4349]">*</span>
          </p>

          <input className="outline-none border-[2px] border-[#F4F4F6] py-[0.875rem] px-[1rem] w-full"></input>
        </div>

        <div  className="font-[400] caption mb-[0.25rem]">
        By submitting this form, you agree to the <span className="text-[#FD4349]">Privacy Policy</span> &  <span className="text-[#FD4349]">Terms of Services</span>
        </div>
      </div>
      <button className="bg-[#FD4349] py-[1rem] px-[2rem] w-full text-white font-[1.125rem] staatliches-regular leading-[1.5rem] font-[400]">
      Book a Consultation
      </button>
    </div>
  );
};

export default FormSectionConsultancy;
