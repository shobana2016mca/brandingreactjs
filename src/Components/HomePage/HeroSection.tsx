import React from 'react';
import useIntract from "../GlobalComponents/useIntract";

const HeroSection: React.FC = () => {
  const { ref, isVisible } = useIntract();

  return (
    <div className="max-md:bg-black-white bg-[#19191F] lg:h-[650px] xl:bg-black-white flex flex-col items-center justify-center w-full">
      <div className="grid max-w-screen-xl grid-cols-1 mx-auto md:grid-cols-2">
        <section
          ref={ref}
          className={`flex flex-col justify-center m-4 lg:ml-36 ${isVisible ? 'animate-slideInDown' : ''}`}
        >
          <h1
            className="mb-4 text-4xl font-bold text-left text-white transition-opacity duration-1000 transform md:text-5xl lg:text-7xl"
          >
            Increase Your Web Traffic with Expert Team
          </h1>
          <p className="mb-6 text-white animate-fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis.
          </p>
          <div className="flex-row w-full mb-4 md:flex">
            <a href="#" className="px-4 py-3 mr-3 text-white bg-orange-600">
              Get Started
            </a>
            <a
              href="#"
              className="px-4 py-3 text-white bg-transparent border border-orange-600"
            >
              How it Works?
            </a>
          </div>
        </section>
        <section className="max-w-[590px] lg:min-w-[590px] min-h-[340px] p-3 mt-8 mx-auto">
          <img
            loading="lazy"
            src="Home-01-img.png"
            alt="Illustration of web traffic growth"
            width="590"
            height="340"
            className={`object-contain h-auto max-w-full ${isVisible ? 'animate-fadeUp' : ''}`}
          />
        </section>
      </div>
    </div>
  );
}

export default HeroSection;
