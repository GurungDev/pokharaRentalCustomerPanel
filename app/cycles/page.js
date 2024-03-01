import ConnectCompany from "@/components/connectBanner";
import CycleListing from "@/components/cyclepage/cycle list main";
import MainListing from "@/components/cyclepage/top ranking cycle/MainListing";

const CyclesPage = () => {
  return (
    <div>
      <div className="py-28 layout">
        <div className="">
          <h1 className="title font-[200] py-2">Cycles</h1>
          <p className="paragraph py-10">
            Embark on adventures with hassle-free cycle rentals for a memorable
            journey on the lakeside
          </p>
        </div>
        <MainListing />
        <CycleListing />
      </div>
     
    </div>
  );
};

export default CyclesPage;
