import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { A11y, Autoplay } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Importing React Icons

const HeroSection: React.FC = () => {
  const swiperRef = React.useRef(null);

  const nextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="relative max-w-screen-xl max-sm:h-[40vh] mx-auto">
      <Swiper
        ref={swiperRef}
        modules={[A11y, Autoplay]}
        slidesPerView={1}
        draggable={true}
        edgeSwipeDetection={true}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src="/WhatsApp Image 2024-07-18 at 11.19.56_a5431556.jpg"
              className="object-cover w-full max-sm:h-[40vh]"
            />
            <div className="absolute inset-0 flex items-center justify-start bg-black bg-opacity-20 ">
            <section
          
          className={`flex flex-col justify-center m-4 lg:ml-36 'animate-slideInDown' : ''}`}
        >
          <h1
            className="mb-4 text-lg max-md:mt-4 md:w-[50%] font-bold text-left text-white transition-opacity duration-1000 transform md:text-5xl lg:text-7xl"
          >
            Increase Your Web Traffic with Expert Team
          </h1>
          <p className="text-white md:mb-6 max-sm:text-sm md:w-[50%] animate-fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis.
          </p>
          
        </section>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="WhatsApp Image 2024-07-18 at 11.19.56_75206e04.jpg"
              className="object-cover w-full max-sm:h-[40vh]"
            />
            <div className="absolute inset-0 flex items-center justify-start pl-4 bg-black bg-opacity-50">
            <section
          
          className={`flex flex-col justify-center m-4 lg:ml-36 'animate-slideInDown' : ''}`}
        >
          <h1
            className="mb-4 text-lg max-md:mt-4 md:w-[50%] font-bold text-left text-white transition-opacity duration-1000 transform md:text-5xl lg:text-7xl"
          >
            Increase Your Web Traffic with Expert Team
          </h1>
          <p className="text-white md:mb-6 max-sm:text-sm md:w-[50%] animate-fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis.
          </p>
          
        </section>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="WhatsApp Image 2024-07-18 at 11.19.55_7897f9d3.jpg"
              className="object-cover w-full max-sm:h-[40vh]"
            />
            <div className="absolute inset-0 flex items-center justify-start pl-4 bg-black bg-opacity-50">
            <section
          
          className={`flex flex-col justify-center m-4 lg:ml-36 'animate-slideInDown' : ''}`}
        >
          <h1
            className="mb-4 text-lg max-md:mt-4 md:w-[50%] font-bold text-left text-white transition-opacity duration-1000 transform md:text-5xl lg:text-7xl"
          >
            Increase Your Web Traffic with Expert Team
          </h1>
          <p className="text-white md:mb-6 max-sm:text-sm md:w-[50%] animate-fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis.
          </p>
          
        </section>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="WhatsApp Image 2024-07-18 at 11.19.55_5898db78.jpg"
              className="object-cover w-full max-sm:h-[40vh]"
            />
            <div className="absolute inset-0 flex items-center justify-start pl-4 bg-black bg-opacity-50">
            <section
          
          className={`flex flex-col justify-center m-4 lg:ml-36 'animate-slideInDown' : ''}`}
        >
          <h1
            className="mb-4 text-lg max-md:mt-4 md:w-[50%] font-bold text-left text-white transition-opacity duration-1000 transform md:text-5xl lg:text-7xl"
          >
            Increase Your Web Traffic with Expert Team
          </h1>
          <p className="text-white md:mb-6 max-sm:text-sm md:w-[50%] animate-fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis.
          </p>
          
        </section>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="WhatsApp Image 2024-07-18 at 11.19.55_79fc31d5.jpg"
              className="object-cover w-full max-sm:h-[40vh]"
            />
            <div className="absolute inset-0 flex items-center justify-start pl-4 bg-black bg-opacity-50">
            <section
          
          className={`flex flex-col justify-center m-4 lg:ml-36 'animate-slideInDown' : ''}`}
        >
          <h1
            className="mb-4 text-lg max-md:mt-4 md:w-[50%] font-bold text-left text-white transition-opacity duration-1000 transform md:text-5xl lg:text-7xl"
          >
            Increase Your Web Traffic with Expert Team
          </h1>
          <p className="text-white md:mb-6 max-sm:text-sm md:w-[50%] animate-fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis.
          </p>
          
        </section>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div
        onClick={prevSlide}
        className="absolute top-1/2 max-md:hidden z-10 flex items-center justify-center w-10 h-10 -ml-5 bg-gray-600 bg-opacity-50 rounded-full cursor-pointer left-[40px]"
      >
        <FiChevronLeft className="text-white" size={24} />
      </div>
      <div
        onClick={nextSlide}
        className="absolute max-md:hidden top-1/2 z-10 flex items-center justify-center w-10 h-10 -mr-5 bg-gray-600 bg-opacity-50 rounded-full cursor-pointer right-[40px]"
      >
        <FiChevronRight className="text-white" size={24} />
      </div>
    </div>
  );
};

export default HeroSection;
