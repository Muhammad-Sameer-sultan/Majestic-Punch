'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const ButtonMain = ({ Btntext,path }: any) => {
  const router = useRouter();


  return (
    <button
    // type='submit'
      onClick={()=>{router.push(`/${path}`)}}
      className="rounded-26xl capitalize font-semibold hover:border-lightseagreen-100 border hover:shadow-xl hover:text-lightseagreen-100 hover:bg-white bg-lightseagreen-100 py-4 px-[45px] text-base sm:text-lg text-white font-poppins"
    >
      {Btntext}
    </button>
  );
};

export default ButtonMain;
