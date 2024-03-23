"use client";
import withAuth from "@/components/authMiddleware";
import MainSection from "@/components/cycle rent page/page";
 import Link from "next/link";
import { useParams } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";

const RentingPage = () => {
  const { id } = useParams();

  return (
    <div className="  py-[7.5rem]">
      <div className="layout">
        <Link href={`/cycles/${id}`} className=" flex gap-2 items-center group">
          <IoMdArrowBack
            size={15}
            className="group-hover:translate-x-[-9px] duration-300"
          />
          <small className="text-neutral-500 small">Get back</small>
        </Link>
      </div>

      <MainSection id={id} />
    </div>
  );
};

export default withAuth(RentingPage);
