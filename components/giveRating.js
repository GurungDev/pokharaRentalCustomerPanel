"use client";
import { getOneRating, giveRate } from "@/services/rating.service";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Rate = ({ ratingFor, listingId }) => {
  const [rate, setRate] = useState(0);
  


  async function giveRating(star) {
    try {
      const res = await giveRate({
        star: star,
        ratingFor: ratingFor,
        issueId: listingId,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex justify-center items-end  m-0">
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label key={index} className="hover:translate-y-[-5px] duration-300">
            <input
              className="hidden"
              type="radio"
              value={givenRating}
              onClick={() => {
                setRate(givenRating);
                giveRating(givenRating);
              }}
            />
            <div className="cursor-pointer">
              <FaStar
                size={18}
                color={givenRating <= rate ? "#FCD34DCC" : "rgb(192,192,192)"}
              />
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default Rate;
