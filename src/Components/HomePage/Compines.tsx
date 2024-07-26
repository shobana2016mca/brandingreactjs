import useIntract from "../GlobalComponents/useIntract";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { A11y, Autoplay } from "swiper/modules";

interface Companies {
    icon: string;
}

const Icons: Companies[] = [
    { icon: "logoipsome-5.png" },
    { icon: "logo-ipsome4.png" },
    { icon: "logoipsom2.png" },
    { icon: "logo-ipsom1.png" },
    { icon: "logo-ipsom.png" },
    { icon: "logoipsome-5.png" },
    { icon: "logoipsome-5.png" },
    { icon: "logo-ipsome4.png" },
    { icon: "logoipsom2.png" },
    { icon: "logo-ipsom1.png" },
    { icon: "logo-ipsom.png" },
    { icon: "logoipsome-5.png" },
];

function Compines() {
    const { ref, isVisible } = useIntract();

    return (
        <section className="w-full mx-auto mb-5 bg-white">
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
                    >
                        {Icons.map((company, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex items-center justify-center p-4">
                                    <img
                                        src={company.icon}
                                        alt="Best Companies"
                                        loading="lazy"
                                        className={`h-auto max-w-full ${isVisible ? 'animate-popup' : ''}`}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Compines;
