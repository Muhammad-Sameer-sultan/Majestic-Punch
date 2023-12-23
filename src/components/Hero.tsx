import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <section
        id="#"
        className="h-[90vh]  grid place-items-center bg-lightseagreen-200 max-sm:px-4 px-20 max-lg:text-[46px] max-slg:text-[36px] max-md:text-[22px] text-[60px] text-black font-work-sans"
      >
        <div className="flex gap-14  justify-between items-center">
          <div className="">
            <h2 className=" leading-[60px] uppercase font-black mb-5">
              Unlocking Innovation through Digital Evolution.
            </h2>
            <p className=" text-base leading-[28px] font-poppins  mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>
            <button className="rounded-26xl  capitalize font-semibold bg-lightseagreen-100 py-4 px-[45px] text-lg text-white font-poppins">
            get a qoute
            </button>
            <div className="w-full h-2 bg-[#0ABAB5] rounded-full">
                <div className="w-2/3 h-full text-center text-xs text-white bg-blue-600 rounded-full">
                </div>
            </div>
          </div>
          <div className=" ">
            <Image
              width={900}
              height={800}
              className=""
              alt=""
              src="/rectangle-35@2x.png"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
