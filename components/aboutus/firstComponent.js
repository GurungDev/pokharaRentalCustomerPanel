import React from "react";

const FirstComponent = () => {
  return (
    <div className="mt-20   mb-40">
      {" "}
      <div className=" w-full text-center">
        <div className="w-[80%] m-auto  grid md:gap-10 grid-cols-1 lg:grid-cols-2 h-[150vh] lg:h-[80vh]">
          <div className="w-full text-left  order-last lg:order-first  flex justify-center items-center">
            <div>
              <h1 className="text-[2rem] mb-8">
                Welcome to{" "}
                <span className="text-[#3586ff] text-[2.3rem] border-b border-b-[3px] border-primary rounded-md">
                  Pokhara Rental
                </span>{" "}
                !
              </h1>
              <div className="paragraph   text-[#5f6368] text-justify">
                We are your premier destination for renting boats, cycles, and a
                wide range of other exciting outdoor equipment. Located in the
                breathtaking city of Pokhara, Nepal, we aim to provide visitors
                with unforgettable experiences amidst the stunning naturala
                beauty of the region. Whether you are looking to explore the
                serene lakes on a boat, embark on an adventurous cycling
                journey, or engage in various outdoor activities, we have you
                covered.
                <p className="paragraph mt-[1rem]   text-justify indent-10">
                  Our top-notch rental services ensure that you have access to
                  well-maintained equipment that meets the highest standards of
                  safety and quality. Our friendly and knowledgeable staff are
                  here to assist you in choosing the perfect equipment for your
                  needs and to offer valuable insights on the best places to
                  visit and explore in Pokhara. Get ready to embark on a
                  thrilling adventure and create lasting memories with Pokhara
                  Rental.
                </p>
              </div>
            </div>
          </div>
          <div className="container-grid w-full h-full">
            <div className="img-1 bg-blue-400 w-full h-full"></div>
            <div className="img-2 bg-blue-400 w-full h-full"></div>
            <div className="img-3 bg-blue-400 w-full h-full"></div>
            <div className="img-5 bg-blue-400 w-full h-full"></div>
            <div className="img-4 bg-blue-400 w-full h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstComponent;
