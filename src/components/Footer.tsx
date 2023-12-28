import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const socialLinks = [
  { icon: <FaFacebook />, href: "http://www.google.com" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
  { icon: <FaLinkedin />, href: "#" },
];
const navItems = [
  { id: '/', label: 'Home' },
  { id: '/services', label: 'services' },
  { id: '/pricing', label: 'pricing' },
  { id: '/portfolio', label: 'porfolio' },
  { id: '/about', label: 'about us' },
];
const Footer = () => {
  return (
    <footer className="bg-darkslategray px-[38px] pt-10 pb-5 text-white font-poppins">
      <div className="grid grid-cols-4 max-lg:gri items-center justify-center gap-[16px] ">
        <div className="p-5 max-lg:col-span-4 max-lg:text-center">
          <h4 className="uppercase   text-[36px] font-work-sans">Logo here</h4>
          <p className="text-[12px] text-[rgba(255,255,255,0.5)] mt-3 leading-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id tempora
            quisquam ullam mollitia odit dolore libero provident odio reiciendis
            sint accusamus tempore, aperiam necessitatibus magnam doloribus.
            Deserunt dicta provident labore?
          </p>
        </div>
        <div className="max-md:col-span-4 col-span-2 flex max-xxsm:flex-wrap   justify-center gap-5 items-center mx-2">
          {navItems.map((item, index) => (
            <Link href={item.id} key={index}  className="capitalize hover:text-lightseagreen-100">{item.label}</Link>
          ))}
        </div>
        <div className="max-lg:col-span-2 max-md:col-span-4 flex items-center justify-center  text-3xl gap-3">
          {socialLinks.map((item, index) => (
              
              <Link key={index} target="_blank" href={item.href} className="border border-lightseagreen-100 text-lightseagreen-100  rounded-full p-2 hover:shadow-lg  hover:text-white hover:bg-lightseagreen-100">
                
              {item.icon}{" "}
            
            </Link>
          ))}
        </div>
      </div>
      <hr className="bg-[rgba(255,255,255,0.5)] mt-6" />
      <div className="mt-5 flex justify-between max-sm:flex-col items-center text-center text-[12px] text-[rgba(255,255,255,0.5)]">
        <p>All Rights Reserved. Majestic Copyright &copy; 2023 </p>
        <div>
          <span className="me-3">Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
