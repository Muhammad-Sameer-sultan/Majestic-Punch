import Image from "next/image";
import React from "react";

const Porfolio = () => {
  return (
    <section
      id="services"
      className="my-10 py-16  max-sm:px-4 px-20  text-black  font-poppins"
    >
      <div className="flex justify-between max-md:gap-10 max-md:mx-[30px]   my-8  items-center  ">
        <div className="">
          <div className="mb-3 text-darkorange-200 uppercase font-semibold">
            gallery
          </div>
          <h2 className="m-0 w-[600px] text-[48px] max-sm:text-[30px] max-lg:text-[38px] leading-[45px] uppercase font-black font-work-sans ">
            oUR STUNNING PORTFOLIO
            <Image width={40} height={40} className=" inline-block ms-5 w-[40px] h-[40px]" alt="" src="/star-6.svg" />
          </h2>
          <button className="mt-5 cursor-pointer max-slg:text-[10px] text-[16px] hover:bg-darkorange-300 hover:shadow-md    font-poppins text-white [border:none]  py-2 px-[20px] bg-darkorange-100  rounded-26xl">
            order Now
          </button>
        </div>
        <div className=" w-[420px] text-[12px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </div>
      </div>
      <div className="flex gap-4  overflow-hidden overflow-x-scroll ">
      <img
        className=" rounded-xl w-96 h-[450px] object-cover"
        alt=""
        src="/rectangle-21@2x.png"
      />    
      <img
        className=" rounded-xl w-96 h-[450px] object-cover"
        alt=""
        src="/rectangle-21@2x.png"
      />    
      <img
        className=" rounded-xl w-96 h-[450px] object-cover"
        alt=""
        src="/rectangle-21@2x.png"
      />    
      <img
        className=" rounded-xl w-96 h-[450px] object-cover"
        alt=""
        src="/rectangle-21@2x.png"
      />    
      <img
        className=" rounded-xl w-96 h-[450px] object-cover"
        alt=""
        src="/rectangle-21@2x.png"
      />    
      <img
        className=" rounded-xl w-96 h-[450px] object-cover"
        alt=""
        src="/rectangle-21@2x.png"
      />    
        </div>
    </section>
  );
};

export default Porfolio;
