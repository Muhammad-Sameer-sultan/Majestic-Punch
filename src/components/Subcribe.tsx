import React from "react";
import ButtonMain from "./ButtonMain";

const Subcribe = () => {
  return (
    <section id='subcribe' className=" py-10 grid place-items-center max-sm:px-4 px-20        text-black font-work-sans ">
      <div className=" leading-[60px] max-lg:leading-10 uppercase font-extrabold max-xl:text-[40px] text-[50px] text-center lg:w-1/2">
        subscribe to our newsletter
      </div>
      <form className="grid grid-cols-3 max-md:grid-cols-2 max-xmd:grid-cols-1 gap-10 justify-center items-center font-poppins  mt-5">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-gainsboro-200 focus:outline-lightseagreen-100 rounded-full p-3"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="bg-gainsboro-200 focus:outline-lightseagreen-100 rounded-full p-3 "
        />
        
        <div className="max-md:col-span-2 max-xmd:col-span-1 grid place-items-center">
          <ButtonMain Btntext="Subcribe" />
        </div>
      </form>
    </section>
  );
};

export default Subcribe;
