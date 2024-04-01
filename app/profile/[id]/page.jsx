import EditProfile from "@/components/profile page/profileEdit";
import Link from "next/link";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";

const EditProfilePage = () => {
  return (
    <div className="py-20 layout">
      <Link href={"/profile"} className="flex gap-2 items-center group">
        <IoMdArrowBack
          size={15}
          className="group-hover:translate-x-[-9px] duration-300"
        />
        <small className="text-neutral-500 small">Get back</small>
      </Link>
      <EditProfile />
    </div>
  );
};

export default EditProfilePage;
