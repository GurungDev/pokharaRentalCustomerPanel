import React from "react";
import Details from "./detail";
import FormSectionConsultancy from "./form";

const MainSection = () => {
  return (
    <div className=" flex flex-col min-[1100px]:flex-row  w-full items-start justify-between my-5">
      <div className="sticky w-[40%] top-[10vh] ">
        <Details />
      </div>
      <div className="w-[90%]  min-[1100px]:w-[55%]">
        <FormSectionConsultancy />
      </div>
    </div>
  );
};

export default MainSection;
