import MainListing from "@/components/boatpage/top ranking boat/MainListing";
import BoatListing from "@/components/boatpage/boat list main";


const BoatsPage = () => {
  return (
    <div className="py-28 layout">
      <div className="">
        <h1 className="title font-[200] py-2">Boats</h1>
        <p className="paragraph py-10">
          Embark on adventures with hassle-free boat rentals for a memorable
          journey on the lakeside
        </p>
      </div>
      <MainListing />
      <BoatListing/>
    
    </div>
   
  );
};

export default BoatsPage;
