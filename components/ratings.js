import React from "react";
import { IoStarSharp } from "react-icons/io5";

const Ratings = ({ count }) => {
    const stars = Array.from({ length: count }, (_, index) => (
        <IoStarSharp key={index} className="text-yellow-400 text-[20px]" />
      ));   
    return <div className="flex">{stars}</div>;
};

export default Ratings;
