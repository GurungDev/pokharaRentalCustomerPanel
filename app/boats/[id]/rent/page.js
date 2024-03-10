"use client"
import MainSection from "@/components/boat rent page/page";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";

const RentingPage = () => {
  const {id} = useParams();
  return (
    <div className="layout  py-[7.5rem]">
      <Link href={`/boats/${id}`} className="flex gap-2 items-center group">
        <IoMdArrowBack
          size={15}
          className="group-hover:translate-x-[-9px] duration-300"
        />
        <small className="text-neutral-500 small">Get back</small>
      </Link>
      <MainSection />
    </div>
  );
};

export default RentingPage;
