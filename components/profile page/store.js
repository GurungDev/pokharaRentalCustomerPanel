"use client";
import React, { useState } from "react";
import { IoMdNotifications, IoMdNotificationsOff } from "react-icons/io";
import { MdStore } from "react-icons/md";

const StoreCard = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="group paragraph flex items-center gap-3 text-neutral-600">
          {" "}
          <span>Store no 1</span>
          <MdStore className="group-hover:translate-x-[7px] duration-300" />
        </div>
        <p className="small"> Parsyang 5, pokhara</p>
      </div>
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isHovering ? (
          <IoMdNotificationsOff size={25} />
        ) : (
          <IoMdNotifications size={25} />
        )}
      </div>
    </div>
  );
};

export default StoreCard;
