import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { A11y, Autoplay } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper as SwiperInstance } from "swiper";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 0,
    image: "/banner.jpg",
    title: "Increase Your Web Traffic with Expert Team",
    link: "#",
  },
  {
    id: 1,
    image: "banner4.jpg",
    title: "Transform Your Brand with Our Expert Solutions",
    link: "#",
  },
  {
    id: 2,
    image: "WhatsApp Image 2024-07-18 at 11.19.55_7897f9d3.jpg",
    title: "",
    link: "#",
  },
  {
    id: 3,
    image: "WhatsApp Image 2024-07-18 at 11.19.55_5898db78.jpg",
    title: "Radio Ads",
    link: "#",
  },
  {
    id: 4,
    image: "digital.jpg",
    title: "Transform Your Brand Identity with Our Expert Solutions!",
    link: "#",
  },
];

const HeroSection: React.FC = () => {
  const swiperRef = React.useRef<SwiperInstance | null>(null);

  const nextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const getStyles = (id: Number) => {
    if (id === 1) {
      return "mt-[50%] lg:ml-[40%] lg:mt-[48%] lg:w-[40%]";
    } else if (id === 2) {
      return "ml-[48%] lg:ml-[14.5%]";
    } else if (id === 3) {
      return "ml-[48%] lg:ml-[48%] lg:mt-[36%]";
    } else if (id === 4) {
      return "lg:ml-[8%] xl:ml-[5%] lg:mt-[10%]";
    } else {
      return "";
    }
  };

  const getHeadingStyles = (id: Number) => {
    if (id === 1) {
      return "lg:text-[44px] md:w-[75%]";
    } else if (id === 3) {
      return "md:w-full";
    } else if (id === 4) {
      return "lg:text-[44px] md:w-[40%]";
    } else {
      return "";
    }
  };

  return (
    <div className="relative max-w-screen-2xl max-sm:h-[40vh] mx-auto">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
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
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={slide.image}
                className="object-contain w-full max-sm:h-[40vh]"
                alt={`Slide ${index + 1}`}
              />
              <div className="absolute inset-0 flex items-center justify-start bg-black bg-opacity-20">
                <section
                  className={`flex flex-col justify-center m-4 lg:ml-36 ${getStyles(slide.id)}`}
                >
                  <h1
                    className={`mb-4 text-2xl max-md:mt-4 md:w-[50%] font-bold text-left text-white transition-opacity duration-1000 transform md:text-5xl lg:text-7xl ${getHeadingStyles(slide.id)}`}
                  >
                    {slide.title}
                  </h1>
                  <Link
                    to={slide.link}
                    className="px-3 py-2 pl-2 mt-1 mr-3 text-white bg-orange-600 w-fit"
                  >
                    Get Started
                  </Link>
                </section>
              </div>
            </div>
          </SwiperSlide>
        ))}
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
