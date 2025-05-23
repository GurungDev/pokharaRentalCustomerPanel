"use client"
import { getAllBoatList } from "@/services/boat.service";
import { getAllcycleList } from "@/services/cycle.service";
import { useEffect, useState } from "react";
import BoatSlider from "../listing_swipper_boat";
import CycleSlider from "../listing_swipper_cycle";
import { toast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

const HomePageProducts = () => {
  const [boatData, setBoatData] = useState();
  const [cycleData, setCycleData] = useState();
  const {push} = useRouter();
  useEffect(()=>{
    async function getData() {
      try {
        const boats = await getAllBoatList({data: {limit: 8}});
        const cyles = await getAllcycleList({data: {limit: 8}});
        setBoatData(boats.data[0]);
        setCycleData(cyles.data[0]);
        
      } catch (error) {
        push("/serverError")
      }
    }
    getData();
  }, [])
  return (
    <div className="w-full bg-white pb-20 " id="bottom-home-section">
      <div className="  py-20   text-text layout m-auto">
        <div className="">
          <small className="secondary-title lg:text-[1.5rem]  text-neutral-500">
            FEATURED LISTING
          </small>
          <h1 className="secondary-title  my-5 mt-[3rem]">
            Pokhara Rentals helps transform business online
          </h1>
          <p className="paragraph mb-2  text-[#5f6368]">
            We thrive to work closely with our clients, cater their requirements
            thoroughly, successfully drive their business with digital
            technology, combined with highly experienced knowledge and
            expertise.
          </p>
        </div>
      </div>

      <div className="">
      <div className="flex justify-between items-center  secondary-title lg:text-[1.5rem]  py-10 text-neutral-500 layout">
          <h1>Boats</h1>
          <Link href="/boats" className="font-[500] text-[.9rem] hover:text-primary hover:translate-x-[-10px] duration-300 h-[30px] lg:text-[1rem] min-[2000px]:text-[1.2rem]">
            Show more
          </Link>
        </div>
      <BoatSlider
        slides={boatData}
      />
      </div>


      <div className="">
        <div className="flex justify-between items-center  secondary-title lg:text-[1.5rem]  py-10 text-neutral-500 layout">
          <h1>Cycles</h1>
          <Link href="/cycles" className="font-[500] text-[.9rem] hover:text-primary hover:translate-x-[-10px] duration-300 h-[30px] lg:text-[1rem] min-[2000px]:text-[1.2rem]">
            Show more
          </Link>
        </div>
      <CycleSlider
        slides={cycleData}
      />
      </div>
    </div>
  );
};

export default HomePageProducts;
