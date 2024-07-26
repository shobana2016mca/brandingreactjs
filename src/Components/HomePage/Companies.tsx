import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { A11y, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { Icons } from "../../../Constants";

function Companies() {

    return (
        <section className="w-full mx-auto mb-5 bg-white min-h-[100vh]">
            <div className="max-w-screen-xl pt-12 mx-auto">
                <h1 className="mt-4 text-3xl font-bold text-center text-slate-700">
                    Trusted by Over{" "}
                    <span className="text-3xl text-orange-600">30000+</span> Companies
                </h1>
                <div  className="">
                    <Swiper
                        modules={[A11y, Autoplay]}
                        slidesPerView={6}
                        draggable={true}
                        edgeSwipeDetection={true}
                        grabCursor={true}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                          220: { slidesPerView: 3 },
                          668: { slidesPerView: 3 },
                          1024: { slidesPerView: 4 },
                          1524: { slidesPerView: 6 },
                        }}
                    >
                        {Icons.map((company, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex items-center justify-center p-4">
                                    <img
                                        src={company.icon}
                                        alt="Best Companies"
                                        loading="lazy"
                                        className={`h-auto max-w-full `}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex items-center justify-center w-full">
                      <Link to='/companies' className="p-3 mx-auto text-white bg-orange-600 w-fit" >Explore More</Link>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Companies;
