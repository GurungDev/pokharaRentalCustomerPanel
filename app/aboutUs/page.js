import FirstComponent from "@/components/aboutus/firstComponent";
import SecondComponent from "@/components/aboutus/secondComponent";
 
const AboutUsPage = () => {
  return (
    <div className=" w-full lg:pt-[10vh] pt-[20vh] text-center">
    
      <SecondComponent />
      <FirstComponent />
    </div>
  );
};

export default AboutUsPage;
