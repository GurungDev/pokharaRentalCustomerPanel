"use client";
import { Listbox, Transition } from "@headlessui/react";

import Image from "next/image";
import { Fragment, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BsCash } from "react-icons/bs";
import { DatePicker } from "../date picker";

const FormSectionConsultancy = () => {
  const [quantity, setQuantity] = useState(0);
  const duration_list = [
    { name: "Select the duration for rent", value: 0 },
    { name: "1 Hour", value: 1 },
    { name: "3 Hour", value: 3 },
    { name: "5 Hour", value: 5 },
    { name: "10 Hour", value: 10 },
  ];
  const currentDate = new Date();
  const today = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );
  const [selected_pick_up_date, set_selected_pick_up_date] = useState(today);

  const [duration, setDuration] = useState(duration_list[0]);

  return (
    <div className="   w-full h-full m-auto p-[1.5rem] min-[1100px]:px-[3rem] ">
      <div className="grid gap-[1rem] pb-[3rem]">
        <div className="">
          <h1 className="secondary-title font-[300]  ">Boats</h1>
          <p className="paragraph py-4">
            Provide details to book now !
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="">
            <p className="font-[600] caption mb-[0.25rem]">
              Pick up Date<span className="text-[#FD4349]">*</span>
            </p>

            <DatePicker
              value={selected_pick_up_date}
              onChange={set_selected_pick_up_date}
            />
          </div>
          <div className="">
            <p className="font-[600] caption mb-[0.25rem]">
              Quantity of Boat <span className="text-[#FD4349]">*</span>
            </p>
            <div className="flex gap-3 mt-3">
              <button
                onClick={() => setQuantity(1)}
                className={
                  quantity === 1
                    ? "bg-gray-600 text-white px-3 py-2 rounded"
                    : "bg-gray-200 text-gray-600 px-3 py-2 rounded"
                }
              >
                1
              </button>
              <button
                onClick={() => setQuantity(2)}
                className={
                  quantity === 2
                    ? "bg-gray-600 text-white px-3 py-2 rounded"
                    : "bg-gray-200 text-gray-600 px-3 py-2 rounded"
                }
              >
                2
              </button>
              <button
                onClick={() => setQuantity(3)}
                className={
                  quantity === 3
                    ? "bg-gray-600 text-white px-3 py-2 rounded"
                    : "bg-gray-200 text-gray-600 px-3 py-2 rounded"
                }
              >
                3
              </button>
              <button
                onClick={() => setQuantity(4)}
                className={
                  quantity === 4
                    ? "bg-gray-600 text-white px-3 py-2 rounded"
                    : "bg-gray-200 text-gray-600 px-3 py-2 rounded"
                }
              >
                4
              </button>
              <button
                onClick={() => setQuantity(5)}
                className={
                  quantity === 5
                    ? "bg-gray-600 text-white px-3 py-2 rounded"
                    : "bg-gray-200 text-gray-600 px-3 py-2 rounded"
                }
              >
                5
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <p className="font-[600] caption mb-[0.25rem]">
            Duration <span className="text-[#FD4349]">*</span>
          </p>

          <Listbox value={duration} onChange={setDuration}>
            <div className="relative  ">
              <Listbox.Button className="relative w-full  text-black cursor-default    text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm   border-[2px] border-[#F4F4F6] py-[0.875rem] px-[1rem] w-full">
                <span className="block truncate">{duration.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <AiFillCaretDown className="h-5 w-5 " aria-hidden="true" />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-[100] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {duration_list.map((d, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                        }`
                      }
                      value={d}
                    >
                      {d.name}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        <div className="font-[400] caption mb-[0.25rem]">
          By submitting this form, you agree to the
          <span className="text-primary">Privacy Policy</span> &{" "}
          <span className="text-primary">Terms of Services</span>
        </div>
      </div>
      <div className="grid gap-3">
        <button
          disabled={duration?.value == 0 || quantity === 0}
          className={`${
            duration?.value == 0 || quantity === 0 ? "hidden" : ""
          } bg-primary flex items-center justify-center gap-3 btn  py-[1rem] px-[2rem] w-full text-white font-[1.125rem] staatliches-regular leading-[1.5rem] font-[400]`}
        >
          <BsCash size={25} />
          Cash on delivery
        </button>
        <button
          disabled={duration?.value == 0 || quantity === 0}
          className={`${
            duration?.value == 0 || quantity === 0 ? "hidden" : ""
          } bg-[#60bb46] flex items-center justify-center gap-3 btn  py-[1rem] px-[2rem] w-full text-white font-[1.125rem] staatliches-regular leading-[1.5rem] font-[400]`}
        >
          <Image
            src="/esewa.png"
            width="25"
            height="25"
            alt="esewa logo"
          ></Image>
          Esewa
        </button>
      </div>
    </div>
  );
};

export default FormSectionConsultancy;
