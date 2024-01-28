import React from "react";
import ButtonMain from "./ButtonMain";

const Pricing = () => {
  return (
    <section
      id="about"
      className="relative py-14 grid place-items-center max-sm:px-4 px-20 max-lg:text-[30px]        max-xl:text-[40px] text-[50px] text-black font-work-sans"
    >
            <div className="absolute bottom-0 bg-lightseagreen-200 max-xmd:h-[75%] max-md:h-[60%] max-lg:h-[65%] h-[30%] z-[-1] left-0 right-0  "></div>

      <div className="flex justify-between max-slg:flex-col items-center max-slg:text-center">
        <div className="slg:w-1/2">
          <h2 className=" leading-[60px] max-lg:leading-10 uppercase font-black mb-5">
            get 50% discount on your first order
          </h2>
          <ButtonMain Btntext="Read more" path='pricing' />
        </div>
        <div className="text-base  font-poppins max-slg:mt-10 max-slg:w-full w-1/3">
        Embark on your creative journey with Majestic Punch! Enjoy a Spectacular 50% Discount on Your First Order. Immerse yourself in high-quality embroidery and digitizing services tailored to your unique vision. Don&apos;t miss this chance to elevate your projects with precision and artistry. Place your order now and experience the Majestic Punch difference!
        </div>
      </div>

      <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-5 max-xmd:text-center font-work-sans mt-10  ">
        
        <div className=" ">
          <h3 className=" mb-5 text-13xl uppercase font-extrabold ">
            EMBROIDERY DIGITIZING
          </h3>
          <div
            className="rounded-2xl p-2 bg-white"
            style={{ boxShadow: "0rem 0rem  20px 0px  rgba(0,0,0,0.1)" }}
          >
            <div className="grid  max-xmd:grid-cols-1 grid-cols-3 gap-[2px] items-center justify-center rounded-2xl bg-gainsboro-200    text-center">
              <div>
                <div className=" text-xl    uppercase p-4 bg-white ">
                  {" "}
                  STARTER
                </div>
                <hr />
                <div className="text-13xl  uppercase p-4 bg-white text-lightseagreen-100">
                  $9
                </div>
              </div>
              <div>
                <div className="text-xl   uppercase p-4 bg-white ">basic</div>

                <hr />
                <div className="text-13xl  uppercase p-4 bg-white text-lightseagreen-100">
                  $18
                </div>
              </div>
              <div>
                <div className="text-xl  uppercase p-4 bg-white ">
                  {" "}
                  Standard
                </div>
                <hr />
                <div className="text-13xl  uppercase p-4 bg-white text-lightseagreen-100">
                  $25
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" ">
          <h3 className=" mb-5 text-13xl uppercase font-extrabold ">
            vector conversion
          </h3>
          <div
            className="rounded-2xl p-2 bg-white"
            style={{ boxShadow: "0rem 0rem  20px 0px  rgba(0,0,0,0.1)" }}
          >
            <div className="grid  max-xmd:grid-cols-1 grid-cols-3 gap-[2px] items-center justify-center rounded-2xl bg-gainsboro-200    text-center">
              <div>
                <div className=" text-xl    uppercase p-4 bg-white ">
                  {" "}
                  SIMPLISTIC
                </div>
                <hr />
                <div className="text-13xl  uppercase p-4 bg-white text-lightseagreen-100">
                  $7
                </div>
              </div>
              <div>
                <div className="text-xl   uppercase p-4 bg-white ">
                  INTERMEDIATE
                </div>

                <hr />
                <div className="text-13xl  uppercase p-4 bg-white text-lightseagreen-100">
                  $21
                </div>
              </div>
              <div>
                <div className="text-xl  uppercase p-4 bg-white ">
                  {" "}
                  REALISTIC
                </div>
                <hr />
                <div className="text-13xl  uppercase p-4 bg-white text-lightseagreen-100">
                  $52
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-black  w-full h-[2px] mt-16 opacity-10" />
    </section>
  );
};

export default Pricing;
