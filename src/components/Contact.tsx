import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section className="relative py-10 grid place-items-center max-sm:px-4 px-20       text-black ">
      <div className="flex justify-between items-center  gap-0  max-slg:flex-col imd:tems-start max-slg:text-center">
        <div className=" slg:  mb-5">
          <h6 className="text-lightseagreen-100 text-xl font-poppins uppercase font-semibold">
            contact us{" "}
          </h6>

          <h2 className="max-lg:text-[46px] max-slg:text-[36px]  text-[60px] text-black font-work-sans leading-[60px] max-lg:leading-10 uppercase  font-black">
            GEt in touch
            <Image
              src="/star-6.svg"
              className="inline-block ms-5"
              width={50}
              height={50}
              alt="star pricing"
            />
          </h2>
        </div>

        <div className="text-base  font-poppins max-slg:w-full w-1/3">
          <h5>
            {" "}
            Explore the creation of Embroidery Digitizing to experience the
            ultimate artistry of our versatile digitizers.
          </h5>
        </div>
      </div>
      <form className="formp-6 my-10 relative w-full">
        <div className="grid grid-cols-2   max-sm:grid-cols-1 gap-5 mt-3">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className="border bg-gray-100 rounded-lg  p-3 italic focus:outline-lightseagreen-100  "
          />
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Your Last Name"
            className="border bg-gray-100 rounded-lg  p-3 italic focus:outline-lightseagreen-100 "
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className="border bg-gray-100 rounded-lg  p-3 italic focus:outline-lightseagreen-100  "
          />
          <input
            type="tel"
            name="phone_number"
            id="phone_number"
            placeholder="Phone Number"
            className="border bg-gray-100 rounded-lg  p-3 italic focus:outline-lightseagreen-100 "
          />
          <textarea
            name=""
            id=""
            cols={10}
            rows={10}
            placeholder="Type Your Message Here ....."
            className="border bg-gray-100 rounded-lg  p-3 italic focus:outline-lightseagreen-100 mt-3 sm:col-span-2"
          ></textarea>
        </div>

        <input
          type="submit"
          value="Submit Now"
          className="w-full mt-6 hover:cursor-pointer hover:bg-white hover:text-lightseagreen-100 border hover:shadow-lg hover:border-lightseagreen-100   bg-lightseagreen-100 rounded-full text-lg font-poppins  text-white font-semibold p-3"
        />
      </form>
    </section>
  );
};

export default Contact;
