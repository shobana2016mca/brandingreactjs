import React from 'react';
import useIntract from "../GlobalComponents/useIntract";
import { FaCheckCircle } from 'react-icons/fa';

const GenerateTraffic: React.FC = () => {
  
  const { ref, isVisible } = useIntract();
  return (
    <div className="relative flex items-center justify-center p-2 lg:p-6 max-md:bg-white-gray md:bg-white xl:bg-white-gray " ref={ref}>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
        <div className={`flex flex-col justify-center p-6 ${isVisible ? 'animate-fadeUp' : '  '} `}>
          <h2 className="text-sm font-semibold text-red-500">GROW YOUR BUSINESS</h2>
          <h1 className="mt-2 text-5xl font-bold text-black">
            Generate <span className="text-red-500">100% Traffic</span> On Your Website
          </h1>
          <p className="mt-4 text-gray-600">
            Quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam voluptatem.
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
          <a className="px-6 py-3 mt-6 font-semibold text-white bg-black w-fit hover:bg-gray-800">
            Get Started
          </a>
        </div>
        <section className={`md:max-w-[490px] flex items-center justify-center w-full p-3 mt-8 mx-auto  ${isVisible ? 'animate-fadeUp' : '  '} `}>
            <img loading="lazy" src="Grow-Your-Business.png" alt="Grow-Your-Business" className="object-contain h-auto max-w-full mt-4 animate-fadeUp " />
        </section>
        
      </div>
    </div>
  );
};

export default GenerateTraffic;
