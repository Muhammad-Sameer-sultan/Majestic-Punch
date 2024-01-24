"use client";
import Image from "next/image";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";

const MobileNav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [navClassName, setNavClassName] = useState("nav");
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setNavClassName(showMenu ? "nav relative" : "nav new_height fixed ");
  };
  const navItems = [
    { id: '/', label: 'Home' },
    { id: '/services', label: 'services' },
    { id: '/pricing', label: 'pricing' },
    { id: '/portfolio', label: 'porfolio' },
    { id: '/about', label: 'about us' },
    { id: '/contact-us', label: 'contact us' },
  ];
  return (
    <nav
      className={` slg:hidden px-[72px] pt-[20px] max-xmd:p-[20px] h-[65px] ${navClassName}  bg-gradient z-[150] `}
    >
      <div className="flex justify-between items-center">
        <div>
          <Image
            className=""
            src="/logo.svg"
            width={200}
            height={50}
            alt="Majestic punch logo"
          />
        </div>
        <div className="text-darkorange-200 text-[32px] max-xsm:text-[24px] xlg:hidden cursor-pointer">
          <HiMiniBars3BottomLeft
            onClick={toggleMenu}
            className={`transition-all duration-400 ease-in ${
              showMenu ? "hidden" : "block"
            }`}
          />
          <FaPlus
            onClick={toggleMenu}
            className={`transition-all duration-400 ease-in rotate-45 ${
              showMenu ? "block" : "hidden"
            }`}
          />
        </div>
      </div>
      <div
        className={`absolute top-16 left-0 right-0 flex flex-col justify-center items-center bg-white pb-4 ${
          showMenu ? "flex" : "hidden"
        } gap-6`}
      >
        <ul className="flex gap-6 flex-col justify-center items-center text-[#1D1C1C] text-lg font-semibold">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.id}
                onClick={() => {
                  setActiveNav(item.id);
                  toggleMenu();
                }}
                className={activeNav === item.id ? "nav-active" : "nav-links"}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-6 flex-1 items-center mt-6">
            <input type="text" className="h-10    outline" />
          <Image
            width={28}
            height={28}
            className="overflow-hidden "
            alt="search"
            src="/frame.svg"
          />
          <div className="relative rounded-[50%] bg-darkslategray  w-[60px] h-[60px] z-[0]">
            <Image
              width={28}
              height={28}
              className="absolute my-0 mx-[!important] top-[16px] left-[16px]   z-[1]"
              alt="login"
              src="/frame1.svg"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
