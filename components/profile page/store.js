"use client";
import { IoMdNotifications } from "react-icons/io";
import { MdStore } from "react-icons/md";

const StoreCard = ({ name, phoneNumber }) => {
  return (
    <div className="flex group hover:translate-x-[3px] duration-300 items-center justify-between">
      <div>
        <div className="group paragraph flex items-center gap-3 text-neutral-600">
          {" "}
          <span>{name}</span>
          <MdStore className="group-hover:translate-x-[7px] duration-300" />
        </div>
        <p className="small"> {phoneNumber}</p>
      </div>
      <div>
        <IoMdNotifications size={25} />
      </div>
    </div>
  );
};

export default StoreCard;
