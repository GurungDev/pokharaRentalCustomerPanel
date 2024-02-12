
import ContactForm from "@/components/contact/contactForm";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import { MdOutlineArticle } from "react-icons/md";
import { RiCodeBoxLine } from "react-icons/ri";

export default function FormPage() {
  return (
    <div className="layout m-auto">
      <div className="grid lg:grid-cols-6  gap-14  mt-[68px]">
        <div className="lg:col-span-4 py-10">
          <ContactForm />
        </div>
        <div className="lg:col-span-2 py-20  ">
          <div className="grid gap-5  m-auto">
            <Link href="/aboutUs" className=" group    px-14  py-10 text-blue-600 bg-blue-100 rounded-md shadow">
              <RiCodeBoxLine className="text-[4rem]" />
              <h1 className="paragraph flex mt-3 justify-between items-center">
                About Us
                <BsArrowRightShort className="text-[1.8em]  group-hover:translate-x-[10px]  duration-300 " />
              </h1>
            </Link>
            <Link
              href="/store"
              className=" group   px-14 py-10 text-green-600  bg-green-100 rounded-md shadow"
            >
              <MdOutlineArticle className="text-[4rem]" />
              <h1 className="paragraph flex mt-3 justify-between items-center">
                Our Stores
                <BsArrowRightShort className="text-[1.8em]  group-hover:translate-x-[10px]  duration-300 " />
              </h1>
            </Link>
          </div>
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
