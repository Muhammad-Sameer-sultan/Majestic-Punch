import React from "react";
import { MdEmail } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaVoicemail,
} from "react-icons/fa";
import Link from "next/link";

const socialLinks = [
  { icon: <FaFacebook />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
  { icon: <FaLinkedin />, href: "#" },
];

const ContactNav = () => {
  return (
    <div className="flex justify-between max-xxlg:text-xl p-3 text-[26px] bg-lightseagreen-100 px-10 items-center text-white max-xmd:hidden">
      <div className="flex items-center gap-5  ">
        <Link href={"#"}>
          <MdEmail className="" />{" "}
        </Link>
        <span className="underline uppercase text-[14px]">
          subcribe to our news letter
        </span>
      </div>
      <div className=" flex items-center gap-3">
        {socialLinks.map((item, index) => (
          <Link key={index} href={item.href}>
            {item.icon}{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactNav;
