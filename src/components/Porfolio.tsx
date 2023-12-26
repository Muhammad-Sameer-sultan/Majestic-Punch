"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Slider from "./Slider";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const portfolioImages = [
  { images: "/Rectangle 24.svg" },
  { images: "/Rectangle 21.svg" },
  { images: "/Rectangle 22.svg" },
  { images: "/Rectangle 23.svg" },
  { images: "/Rectangle 24.svg" },
  { images: "/Rectangle 24.svg" },
  { images: "/Rectangle 24.svg" },
  { images: "/Rectangle 24.svg" },
  { images: "/Rectangle 24.svg" },
];

const Porfolio = () => {
  const [view, changeView] = useState(false);
  const [transitionClass, setTransitionClass] = useState("opacity-1 ease");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setTransitionClass("opacity-0");
    setTimeout(() => {
      setTransitionClass("opacity-1");
    }, 150);

    changeView(!view);
  };
  const handlePrevClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= containerRef.current.offsetWidth;
    }
  };
  const handleNextClick = () => {
    if (containerRef.current) {
          console.log(containerRef.current.offsetWidth)
      console.log(containerRef.current.scrollLeft)

      containerRef.current.scrollLeft += containerRef.current.offsetWidth;
      console.log("scrollLeft Final",containerRef.current.scrollLeft)
    }
  };
  return (
    <section
      id="about"
      className="relative py-14 grid place-items-center max-sm:px-4 px-20 max-lg:text-[30px]        max-xl:text-[40px] text-[50px] text-black font-work-sans"
    >
      <div className="flex justify-between max-slg:flex-col items-center max-slg:text-center">
        <div className="slg:w-1/2">
          <h2 className=" leading-[60px] max-lg:leading-10 uppercase font-black mb-5">
            our stunning portfolio
          </h2>
        </div>

        <div className="text-base  font-poppins max-slg:mt-10 max-slg:w-full w-1/3">
          <h5>
            {" "}
            Explore the creation of Embroidery Digitizing to experience the
            ultimate artistry of our versatile digitizers.
          </h5>
          <div className=" flex gap-4 justify-end mb-7 ">
            <FaCircleChevronLeft
              className="cursor-pointer text-33xl text-lightseagreen-100  hover:bg-lightseagreen-100 hover:text-white active:text-lightseagreen-200  rounded-full max-md:w-[30px] max-sm:mx-auto"
              onClick={handlePrevClick}
            />
            <FaCircleChevronRight
              className="cursor-pointer text-33xl text-lightseagreen-100  hover:bg-lightseagreen-100 hover:text-white active:text-lightseagreen-200  rounded-full max-md:w-[30px] max-sm:mx-auto"
              onClick={handleNextClick}
            />
          </div>
        </div>
      </div>

      <div ref={containerRef} className="flex gap-4 scroll-container overflow-x-scroll   mt-5 ">
        {portfolioImages.map((img, index) => (
          <Image
            src={img.images}
            key={index}
            alt={img.images}
            width={250}
            height={300}
            className=" object-cover w-72 rounded-lg"
          />
        ))}
      </div>
    </section>
  );
};

export default Porfolio;
