import Image from "next/image";
import React from "react";

const About = () => {
  return (
    // <section id="#" className="font-work-sans">
    <section className="my-10  max-sm:px-4 px-20  text-black  font-poppins">
      <div className="flex justify-center  gap-x-52 my-8  items-center ">
        <div className=""> 
          <div className="mb-3 uppercase font-semibold text-darkorange-100">
            about us
          </div>
          <h1 className="m-0 text-[48px] leading-[55px] uppercase font-black font-work-sans   w-[520px]">
            Crafting Your Digital Future, Seamlessly.
          </h1>
        </div>
        <div>
          <Image
          width={80}
          height={80}
            className=""
            alt=""
            src="/star-11.svg"
          />
        </div>
      </div>

      <div className=" grid grid-cols-[auto,1fr,auto] max-slg:grid-cols-3  gap-5 items-start">
        
     <div className="max-slg:col-span-3 place-items-center grid ">
      <div className="relative">
        
      <Image
      width={100}
      height={100}
        className=" absolute left-[-60px] top-[-60px] z-[-1] max-slg:mt-5 w-[122px] h-[122px]"
        alt=""
        src="/star-5.svg"
      />  
        <Image
      width={400}
      height={122}
      className=" rounded-xl  z-10 max-xl:w-[300px] max-slg:w-[300px] max-lg:w-[220px]"
      alt=""
      src="/rectangle-14@2x.png"
      />
      </div>
    
     </div>
     
      
       <div className=" leading-[35px] max-slg:col-span-2 max-xslg:leading-[25px] max-xslg:text-[14px] text-gray-900">
        <p>    Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.</p>
        <button className="mt-5   cursor-pointer max-slg:text-[14px] text-[16px] hover:bg-darkorange-300 hover:shadow-md   capitalize font-semibold font-poppins text-white [border:none] max-slg:py-2 max-slg:max-px-[20px] py-2 px-[25px] bg-darkorange-100  rounded-26xl">
        explore more
      </button> 
    
      </div>
      
      <Image
      width={220}
      height={90}
        className="mx-auto rounded-xl self-start max-xl:w-[160px]  max-lg:w-[120px]"
        alt=""
        src="/rectangle-15@2x.png"
      />
    
     
        
      </div>
       </section>
  );
};

export default About;
