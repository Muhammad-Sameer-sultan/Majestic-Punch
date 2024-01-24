import Image from "next/image";
import React from "react";
import ButtonMain from "./ButtonMain";

const About = () => {
  return (
    // <section id="#" className="font-work-sans">
    <section
      id="about"
      className="mt-14 relative py-14 grid place-items-center max-sm:px-4 px-20 max-lg:text-[30px]      max-slg:text-center  max-xl:text-[40px] text-[50px] text-black font-work-sans"
    >
      <div className="absolute bg-lightseagreen-200 h-[65%] w-full z-[-1] bottom-0"></div>
      <div className="flex justify-between max-slg:flex-col items-center">
        <div>
          <h2 className=" leading-[60px] max-lg:leading-10 uppercase font-black mb-5">
            About us
          </h2>
          <ButtonMain Btntext="Read more" path="about" />
        </div>
        <div className="text-base font-poppins max-slg:mt-10 max-slg:w-full w-1/3">
          Welcome to The Majestic Punch, where passion meets precision in the
          world of embroidery. At Majestic Punch, we go beyond the ordinary,
          transforming fabric into personalized masterpieces. Founded on a love
          for the needle arts......
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
      <div className="grid grid-cols-1 slg:grid-cols-3  justify-center items-center  gap-5 mt-10 p-2">
        <div className="border border-gainsboro-100 p-5 rounded  h-fit">
          <h2 className="text-[20px] capitalize mb-2">TURNAROUND TIME</h2>
          <p className="text-[14px] font-poppins">
            Time is of the essence, and at The Majestic Punch, we value your
            time and understand the importance of meeting deadlines. Our
            streamlined digitization process allows us to provide quick
            turnaround times without compromising on the quality of your
            digitized designs.
          </p>{" "}
        </div>
        <div className="border border-gainsboro-100 p-5 rounded bg-lightseagreen-100 scale-105 text-white  ">
          <h2 className="text-[20px] capitalize mb-2">WHY THE MAJESTIC PUNCH</h2>
          <p className="text-[14px] font-poppins">
          The Majestic Punch is committed to delivering digitized designs with unparalleled precision. We embrace cutting-edge technology to stay ahead of industry trends. Whether you have a simple logo or a complex artwork, Majestic Punch can handle it all. Our competitive pricing reflects our commitment to delivering top-notch digitization services without breaking the bank.
          </p>{" "}
        </div>
        <div className="border border-gainsboro-100 p-5 rounded  h-fit">
          <h2 className="text-[20px] capitalize mb-2">MAJESTIC’S CORE COMPETENCY</h2>
          <p className="text-[14px] font-poppins">
          We believe in customer satisfaction. Our customer-centric approach includes dedicated 24/7 support ensuring that each of our service is a masterpiece that exceeds customer expectations.
          </p>{" "}
        </div>
      </div>
      <hr className="bg-black  w-full h-[2px] mt-16 opacity-10" />
    </section>
  );
};

export default About;
