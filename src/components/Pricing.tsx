import React from 'react'

const Pricing = () => {
  return (
    <section
      id="services"
      className="my-10 py-16  max-sm:px-4 px-20  text-black  font-poppins"
    >
      <div className="flex justify-between max-md:gap-10 max-md:mx-[30px]   my-8  items-center  ">
        <div className="">
          <div className="mb-3 text-darkorange-200 uppercase font-semibold">
            Pricing
          </div>
          <h2 className="m-0 w-[600px] text-[48px] max-sm:text-[30px] max-lg:text-[38px] leading-[45px] uppercase font-black font-work-sans ">
          GET 50% DISCOUNT ON YOUR FIRST ORDER
          </h2>
          <button className="mt-5 cursor-pointer max-slg:text-[10px] text-[16px] hover:bg-darkorange-300 hover:shadow-md    font-poppins text-white [border:none]  py-2 px-[20px] bg-darkorange-100  rounded-26xl">
            order Now
          </button>
        </div>
        <div className=" w-[420px] text-[12px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </div>
      </div>

      <div className='grid grid-cols-2 gap-5 font-work-sans'>
        <div className=' '>
    <h3 className="  text-13xl uppercase font-extrabold ">
    EMBROIDERY DIGITIZING
    </h3>
    <div className='grid grid-cols-3 gap-1 bg-gainsboro-200 rounded-2xl shadow-xl  text-center'  >
      <div className='text-9xl uppercase p-4 bg-white '>
      basic
      </div>
      <div className='text-9xl uppercase p-4 bg-white '>
      basic
      </div>
      <div className='text-9xl uppercase p-4 bg-white '>
      basic
      </div>
      <div className='text-9xl uppercase p-4 bg-white '>
      basic
      </div>
      <div className='text-9xl uppercase p-4 bg-white '>
      basic
      </div>
      <div className='text-9xl uppercase p-4 bg-white '>
      basic
      </div>

    </div>
    
        </div>

        <div className='bg-red-200'>
f
        </div>
      </div>
      <hr className="bg-black  mt-20" />
    </section>
  )
}

export default Pricing