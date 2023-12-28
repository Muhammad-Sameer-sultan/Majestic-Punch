'use client'
import  { useRef } from 'react'
import { FaArrowDownLong } from 'react-icons/fa6'

const Banner = ({title,path}:any) => {
    const scrollContiner = useRef<HTMLDivElement>(null)
    const scrollDown = () => {
      if (scrollContiner.current) {
        window.scrollBy(0, scrollContiner.current.offsetHeight);
      }
    };
  return (
    <div ref={scrollContiner} className='relative mb-28 bg-lightseagreen-200 max-md:h-[50vh] h-[70vh] text-center grid place-items-center'>
        <div>
        <h2 className='text-[70px] capitalize font-bold font-work-sans'> {title}</h2>
        <span className='capitalize'> Home // {path}</span>
        </div>
   
        <div className="text-center absolute bottom-[-5rem]    ">
        <div
          onClick={scrollDown}
          className="text-[50px]  inline-block p-6 bg-lightseagreen-100 text-white rounded-full hover:cursor-pointer hover:shadow-xl hover:bg-white hover:text-lightseagreen-100"
        >
          <FaArrowDownLong className=" " />
        </div>
        <div className="font-normal text-xl max-slg:text-base font-work-sans">Scroll Down</div>
      </div>
    </div>
  )
}

export default Banner