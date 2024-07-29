import React from "react";
import useIntract from "../GlobalComponents/useIntract";
import { FaCheckCircle } from "react-icons/fa";

const GenerateTraffic: React.FC = () => {
  const { ref, isVisible } = useIntract();
  return (
    <div
      className="relative flex items-center justify-center p-2 lg:p-6 max-md:bg-white-gray md:bg-white xl:bg-white-gray "
      ref={ref}
    >
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
        <div
          className={`flex flex-col justify-center p-6 ${isVisible ? "animate-fadeUp" : "  "} `}
        >
          <h2 className="text-sm font-semibold text-red-500">
            GROW YOUR BUSINESS
          </h2>
          <h1 className="mt-2 text-5xl font-bold text-black">
            Generate <span className="text-red-500">100% Traffic</span> On Your
            Website
          </h1>
          <p className="mt-4 text-gray-600">
            Welcome to branding solutions, where technology meets creativity to
            redefine branding solutions. Founded on the principles of
            innovation, excellence, and client satisfaction, we are a dedicated
            team of software developers, designers, and strategists committed to
            helping businesses of all sizes enhance their brand identity in the
            digital age.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-gray-800">
              <FaCheckCircle className="mr-2 text-green-500" />
              Advertising & Marketing
            </li>
            <li className="flex items-center text-gray-800">
              <FaCheckCircle className="mr-2 text-green-500" />
              Web Development
            </li>
            <li className="flex items-center text-gray-800">
              <FaCheckCircle className="mr-2 text-green-500" />
              Mobile App Development
            </li>
            <li className="flex items-center text-gray-800">
              <FaCheckCircle className="mr-2 text-green-500" />
              Search Engine Optimization
            </li>
          </ul>

          <h1 className="mt-2 text-5xl font-bold text-black">
            Why
            <span className="text-red-500">Choose</span> Us?
          </h1>
          <p className="mt-4 mb-20 text-gray-600">
            Expert Team: Our team consists of highly skilled professionals with
            extensive experience in software development and branding.
            <br />
            Client-Centric Approach: We prioritize understanding your needs and
            delivering solutions that exceed your expectations. <br />
            Innovation: We stay ahead of industry trends to provide you with the
            latest and most effective branding technologies.
          </p>
          <a
            href="/"
            className="px-6 py-3 mt-6 font-semibold text-white bg-black w-fit hover:bg-gray-800"
          >
            Get Started
          </a>
        </div>
        <section
          className={`md:max-w-[490px] flex items-center justify-center w-full p-3 mt-8 mx-auto  ${isVisible ? "animate-fadeUp" : "  "} `}
        >
          <img
            loading="lazy"
            src="Grow-Your-Business.png"
            alt="Grow-Your-Business"
            className="object-contain h-auto max-w-full mt-4 animate-fadeUp "
          />
        </section>
      </div>
    </div>
  );
};

export default GenerateTraffic;
