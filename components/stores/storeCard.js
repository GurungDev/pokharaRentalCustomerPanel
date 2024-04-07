import { FaLocationCrosshairs } from "react-icons/fa6";
import { GiConfirmed } from "react-icons/gi";
import Link from "next/link";

const StoreCard = ({ number, id, name, phoneNumber, email, distance }) => {
  return (
    <div className="bg-zinc-200 h-[20vh] shadow-sm hover:shadow-md duration-300 rounded-md px-6 py-5 w-full gap-5 flex items-center">
      <div className="secondary-title text-secondary ">{number}</div>
      <div className=" flex items-center justify-between  w-full">
        <div className="grid ">
          <h1 className="paragraph text-secondary font-semibold">{name}</h1>
          <h1 className="small  text-[#5f6368]">{email}</h1>
          <h1 className="small  text-neutral-500 mt-1">{phoneNumber}</h1>
        </div>
        <div className="grid gap-3 items-center ">
          <FaLocationCrosshairs className="text-[1.2rem] text-neutral-700 text-center w-full " />
          <div className="small text-[#5f6368]">{distance} km</div>
        </div>
        <Link
          href={"/store/" + id}
          className="bg-white  btn   hover:text-white rounded-xl px-[1.5rem] py-[1rem] group paragraph     "
        >
          {" "}
          <GiConfirmed
            size={25}
            className=""
          />
        </Link>
      </div>
    </div>
  );
};

export default StoreCard;
