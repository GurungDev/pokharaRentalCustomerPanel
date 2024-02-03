import Image from 'next/image'
import React from 'react'

const Listing = (data) => {
  return (
    <div className="!flex !flex-col group !items-center shadow-md !justify-center  bg-red-200 relative min-h-[350px] rounded-md overflow-hidden ">
    <Image
      src={data.image ?? "/lakesideBoat.jpg"}
      alt=""
      width={400}
      height={400}
      className="object-cover w-full h-full absolute group-hover:scale-110 duration-300 group-hover:brightness-[70%] "
    />
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.4))",
      }}
      className="absolute inset-0 o"
    ></div>
    <div className="absolute w-full group h-full flex flex-col justify-end   p-8   ">
      <div className={`w-[30px] h-[5px] border-t-[5px]  border-red-300`}></div>
      <h6 className="text-[1.2] md:text-[1.4] lg:text-[1.7rem] min-[1900px]:text-[1.9rem] font-[400] text-white">
        {data.title ?? "Boat Name"}
      </h6>
      <p className=" h-[0%] opacity-[0%] group-hover:mt-7 group-hover:mb-3 group-hover:h-[55%] group-hover:opacity-[100%] duration-300 text-white text-[.8rem] md:text-[.9rem] lg:text-[1rem] min-[1900px]:text-[1.3rem] ">
        {data.description ?? "Boat Description"}
      </p>
    </div>
  </div>
  )
}

export default Listing