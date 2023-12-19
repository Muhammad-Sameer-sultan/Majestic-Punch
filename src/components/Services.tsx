import Image from "next/image";

const dummy: string = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s `;
const serviceItems = [
  {
    img: "/frame2.svg",
    title: "logo embroidery digitizing",
    description: dummy,
  },
  {
    img: "/frame3.svg",
    title: "cap embroidery digitizing",
    description: dummy,
  },
  {
    img: "/frame4.svg",
    title: "jacket back embroidery digitizing",
    description: dummy,
  },
  {
    img: "/frame5.svg",
    title: "left chest embroidery digitizing",
    description: dummy,
  },
  {
    img: "/frame6.svg",
    title: "3d puff embroidery digitizing",
    description: dummy,
  },
  {
    img: "/frame7.svg",
    title: "color separation",
    description: dummy,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="my-10 py-16  max-sm:px-4 px-20 bg-linen  text-black  font-poppins"
    >
      <div className="flex justify-between max-md:gap-10 max-md:mx-[30px]   my-8  items-center  ">
        <div className="">
          <div className="mb-3 text-darkorange-200 uppercase font-semibold">
            our services
          </div>
          <h2 className="m-0 text-[48px] max-sm:text-[30px] max-lg:text-[38px] leading-[45px] uppercase font-black font-work-sans ">
            Embrace the Digital Revolution.
          </h2>
        </div>
        <div className=" w-[420px] text-[12px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </div>
      </div>

      <section className="relative  grid grid-cols-3 gap-5">
        {serviceItems.map((item) => (
          <div
            key={item.title}
            className="flex hover:text-white   flex-col gap-2 hover:bg-darkorange-200 hover:cursor-pointer rounded-2xl p-5  border-[1px] border-solid border-gainsboro-200"
          >
            <div>
              <div className="border bg-white  border-darkorange-200 rounded-full inline-block p-3">
                <Image
                  width={60}
                  height={60}
                  className="  w-10 h-10  shrink-0 z-[1]"
                  alt=""
                  src={item.img}
                />
              </div>
            </div>
            <h2 className=" uppercase font-black text-3xl font-work-sans">{item.title}</h2>
            <div className=" text-[12px] font-poppins   opacity-[0.5]">
              {item.description}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Services;
