'use client'
import Image from "next/image";
import React, { useRef } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import ButtonMain from "./ButtonMain";

const Hero = () => {
  const scrollContiner = useRef<HTMLDivElement>(null)
  const scrollDown = () => {
    if (scrollContiner.current) {
      window.scrollBy(0, scrollContiner.current.offsetHeight);
    }
  };
  

  return (
    <section
      id="#"
      ref={scrollContiner}
      className="relative py-14 grid place-items-center bg-lightseagreen-200 max-sm:px-4 px-20 max-lg:text-[30px] max-slg:text-center max-xl:text-[40px] text-[50px] text-black font-work-sans"
    >
      <div className="flex gap-14 max-slg:flex-col-reverse justify-between items-center">
        <div className="">
          <h2 className="leading-[60px] max-lg:leading-10 uppercase font-black mb-5">
            Unlocking Innovation through Digital Evolution.
          </h2>
          <p className="text-base leading-[28px] font-poppins mb-5">
          Transforming Dreams into reality. Where Every Thread Weaves Your Imagination
          </p>
          <ButtonMain Btntext="get a quote" path='#subcribe' />
          <div className="mt-24 w-full slg:w-80 font-poppins">
            <div className="text-base flex justify-between font-normal">
              <span>Prev</span>
              <span>Next</span>
            </div>
            <div className="w-full h-2 bg-[rgba(10,186,181,0.2)] rounded-full">
              <div className="w-1/3 h-full text-center text-xs text-white bg-lightseagreen-100 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            width={200}
            height={500}
            className="w-auto slg:min-w-[300px]"
            alt=""
            src="/rectangle-35@2x.png"
          />
        </div>
      </div>
      <div className="text-center absolute bottom-[-5rem] leading-10">
        <div
          onClick={scrollDown}
          className="max-xxlg:text-13xl max-xxlg:p-4 inline-block p-8 bg-lightseagreen-100 text-white rounded-full hover:cursor-pointer hover:shadow-xl hover:bg-white hover:text-lightseagreen-100"
        >
          <FaArrowDownLong className=" " />
        </div>
        <div className="font-normal text-xl max-slg:text-base">Scroll Down</div>
      </div>
    </section>
  );
};

export default Hero;
