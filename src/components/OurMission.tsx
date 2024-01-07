import Image from "next/image";
import React from "react";

const OurMission = () => {
  return (
    // relative py-14 grid place-items-center max-sm:px-4 px-20 max-lg:text-[30px]        max-xl:text-[40px] text-[50px] text-black font-work-sans`}

    <section className="bg-linen flex items-start gap-5 py-14 max-sm:px-4 px-20 max-lg:text-[30px] font-work-sans max-xl:text-[40px] text-[50px]">
      <Image
                className="rounded-lg max-lg:hidden"
        src={"/Rectangle 21.svg"}
        width={300}
        height={300}
        alt="misson 1"
      />
      <div>
        <Image
        className="mb-5 max-md:hidden"
          src={"/star-5.svg"}
          width={70}
          height={70}
          alt="misson 1"
        />
        <div className="flex gap-5 max-md:flex-col-reverse items-center ">
          <Image
          className=""
            src={"/Rectangle 22.svg"}
            width={300}
            height={300}
            alt="misson 1"
          />
          <div >
            <h6 className="text-darkorange-200 text-xl font-poppins uppercase">
              Mission{" "}
            </h6>
            <h2 className=" leading-[60px] max-lg:leading-10 uppercase font-black mb-5">
              Our Mission
            </h2>
            <p className="text-darkslategray text-base font-normal font-poppins leading-[25px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <Image
              className="block ms-auto mt-10 max-xmd:hidden"
              src={"/star-3.svg"}
              width={50}
              height={50}
              alt="misson 1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
