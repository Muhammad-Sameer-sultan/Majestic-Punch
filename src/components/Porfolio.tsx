"use client";
import Image from "next/image";
import React, { useRef} from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import ButtonMain from "./ButtonMain";

const portfolioImages = [
  { images: "/Rectangle 24.svg" },
  { images: "/Rectangle 21.svg" },
  { images: "/Rectangle 22.svg" },
  { images: "/Rectangle 23.svg" },
  { images: "/Rectangle 24.svg" },
  { images: "/Rectangle 23.svg" },
  { images: "/Rectangle 24.svg" },
  { images: "/Rectangle 23.svg" },
  { images: "/Rectangle 21.svg" },
  { images: "/Rectangle 22.svg" },
  { images: "/Rectangle 23.svg" },
  { images: "/Rectangle 22.svg" },
];

const Porfolio = ({bgshow=true}:any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerImg = useRef<HTMLImageElement>(null);

  const handlePrevClick = () => {
    if (containerRef.current && containerImg.current) {
      containerRef.current.scrollLeft -= containerImg.current.offsetWidth;
    }
  };
  const handleNextClick = () => {
    if (containerRef.current && containerImg.current) {
      containerRef.current.scrollLeft += containerImg.current.offsetWidth;
    }
  };
  return (
    <section
      id="about"
      className="relative py-10 grid place-items-center max-sm:px-4 px-20       max-xl:text-[40px] text-[50px] text-black font-work-sans"
    >
      <div className={`${!bgshow?"hidden":"absolute top-0 bg-lightseagreen-200 h-[70%] z-[-1] left-0 right-0 "} `}></div>

      <div className="flex justify-between  gap-0  max-slg:flex-col imd:tems-start max-slg:text-center">
        <div className=" slg:w-1/2  mb-5">

        <h2 className="leading-[60px] max-lg:leading-10 uppercase  font-black">
          our stunning portfolio
        </h2>
        <ButtonMain Btntext='Read more' path='portfolio' />

        </div>

        <div className="text-base  font-poppins max-slg:w-full w-1/3">
          <h5>
            {" "}
            Explore the creation of Embroidery Digitizing to experience the
            ultimate artistry of our versatile digitizers.
          </h5>
          <div className=" flex gap-4 justify-end mt-7 ">
            <FaCircleChevronLeft
              className="cursor-pointer text-33xl text-lightseagreen-100  hover:bg-lightseagreen-100 hover:text-white active:text-lightseagreen-200  rounded-full "
              onClick={handlePrevClick}
            />
            <FaCircleChevronRight
              className="cursor-pointer text-33xl text-lightseagreen-100  hover:bg-lightseagreen-100 hover:text-white active:text-lightseagreen-200  rounded-full "
              onClick={handleNextClick}
            />
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex gap-4 scroll-container  overflow-x-scroll  scroll-smooth mt-5 "
      >
        {portfolioImages.map((img, index) => (
          <Image
            ref={containerImg}
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
