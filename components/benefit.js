import { RiDoubleQuotesL } from "react-icons/ri";
 
export default function ServiceBenefits({ title, benefits }) {
  return (
    <section id="benefits" className="pt-14 pb-14  ">
      <div className=" w-[80%] m-auto  ">
        <p className="small    text-neutral-500  ">
          BENEFITS
        </p>
        
        <p className=" font-[500] pt-4 py-2 text-text">
          {title}
        </p>
        <div className="p-4 space-y-4">
          <ul className="list-disc  text-[#5f6368] paragraph min-[1900px]:text-[1.3rem] px-12 border-l-4 border-pink-400 py-4 space-y-6">
            {benefits.map((i, index) => {
              return <li key={index}>{i}</li>;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
