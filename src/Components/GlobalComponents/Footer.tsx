import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPhone,
  FaRegSquare,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
// import { FaLocationArrow } from "react-icons/fa6";
import useIntract from "../GlobalComponents/useIntract";

interface SocialMediaLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

interface FooterLink {
  href: string;
  text: string;
}

interface FooterData {
  logo: string;
  description: string;
  socialMedia: SocialMediaLink[];
  links: FooterLink[];
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  copyright: string;
}

const footerData: FooterData = {
  logo: "BS-logo.png",
  description: " ",
  socialMedia: [
    { href: "#", icon: <FaFacebookF />, label: "Facebook" },
    { href: "#", icon: <FaTwitter />, label: "Twitter" },
    { href: "#", icon: <FaLinkedinIn />, label: "LinkedIn" },
  ],
  links: [
    { href: "#", text: "Home" },
    { href: "#", text: "About" },
    { href: "#", text: "Services" },
    { href: "#", text: "Projects" },
    { href: "#", text: "Contact Us" },
  ],
  contact: {
    phone: "+91-90563-53599",
    email: "info@brandingsolutions.in",
    address:
      "56 Green Wood Avenue, Lane number 3, Near Krishna Mandir, Kuki Dhab, Jalandhar",
  },
  copyright: "Copyright © 2024 branding  All rights reserved.",
};

const Footer: React.FC = () => {
  const { ref, isVisible } = useIntract();
  return (
    <footer className="py-8 bg-[#EBF1F3]" ref={ref}>
      <div className="max-w-screen-xl p-4 mx-auto sm:p-6 lg:p-8">
        {/* <div className="flex justify-center md:justify-start">
          <img
            src={`/${footerData.logo}`}
            loading="lazy"
            alt="branding"
            className="h-10 "
          />
        </div> */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="text-center md:text-left">
            <img
              src={`/${footerData.logo}`}
              loading="lazy"
              alt="branding"
              className="h-10 width-full"
            />
            {/* <div className="flex justify-center mt-4 space-x-4 md:justify-start">
              {footerData.socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 text-xl text-black border-2 border-black hover:text-white hover:bg-orange-600 hover:border-none"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div> */}
          </div>

          <div className="flex gap-4 text-center md:text-left max-lg:block">
            <ul className="w-full mb-4 space-y-2">
              {footerData.links.map((link, index) => (
                <li key={index} className="list-none ">
                  <a
                    href={link.href}
                    className="flex items-center text-sm text-gray-600 list-none md:text-base lg:text-lg hover:text-orange-600"
                  >
                    <FaRegSquare className="mr-2 text-xs text-orange-600 " />
                    {link.text}
                  </a>{" "}
                </li>
              ))}
            </ul>
            <div className="">
              <div className="flex items-center justify-start mb-1">
                <div>
                  <FaPhone className="block mr-2 text-orange-600" />
                </div>{" "}
                <p className="text-sm text-gray-600 md:text-base lg:text-lg ">
                  {footerData.contact.phone}
                </p>
              </div>
              <div className="flex items-center justify-start mb-1">
                {" "}
                <div>
                  <IoMail className="block mr-2 text-orange-600" />{" "}
                </div>
                <p className="text-sm text-gray-600 md:text-base lg:text-lg ">
                  {" "}
                  {footerData.contact.email}
                </p>
              </div>
              <div className="flex items-start justify-start mb-1">
                <div>
                  <FaLocationDot className="block w-4 text-orange-600" />{" "}
                </div>
                <p className="text-sm text-left text-gray-600 md:text-base lg:text-lg ">
                  {" "}
                  {footerData.contact.address}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <div className="mt-4">
              {/* <form className="flex">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-orange-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-orange-500 hover:bg-orange-600"
                >
                  <span role="img" aria-label="send">
                    <FaLocationArrow className="text-white " />
                  </span>
                </button>
              </form> */}
              {/* <div className="mt-2 text-left ">
                <label className="flex text-sm text-gray-600 md:text-base lg:text-lg">
                  <FaRegSquare className="mt-1 mr-2 text-xs text-orange-600 " />
                  <p>Sign up for emails</p>
                </label>
              </div> */}
            </div>
          </div>
        </div>
        <div className="mt-8 text-sm text-center border-t-2 md:text-base lg:text-lg">
          <p className={`mt-4 ${isVisible ? "animate-fadeUp " : "  "} `}>
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
