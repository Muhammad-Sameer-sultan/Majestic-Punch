import Image from "next/image";
import React from "react";
import ButtonMain from "./ButtonMain";

const About = () => {
  return (
    // <section id="#" className="font-work-sans">
    <section id="about"
    className="mt-14 relative py-14 grid place-items-center max-sm:px-4 px-20 max-lg:text-[30px]      max-slg:text-center  max-xl:text-[40px] text-[50px] text-black font-work-sans"
>
  <div className="absolute bg-lightseagreen-200 h-[40%] w-full z-[-1] bottom-0"></div>
  <div className="flex justify-between max-slg:flex-col items-center">
    <div>
    <h2 className=" leading-[60px] max-lg:leading-10 uppercase font-black mb-5">
              About us
            </h2>
            <ButtonMain Btntext="Read more"/>
    </div>
    <div className="text-base font-poppins max-slg:mt-10 max-slg:w-full w-1/3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rem debitis qui asperiores reprehenderit sapiente repudiandae? Dicta ipsum dolorem esse optio exercitationem error cumque eius, quas est saepe eveniet consequuntur?
    </div>
  </div>
  <div className="mt-16">
  
  <Image
              width={900}
              height={900}
              className="w-full"
              alt=""
              src="/about1.svg"
            />
  </div>
  <hr  className="bg-black  w-full h-[2px] mt-16 opacity-10"/>

    </section>
  );
};

export default About;
