import { useState } from "react";
import Card from "../Components/HomePage/Card";
import HeroSection from "../Components/HomePage/HeroSection";
import { FaPlay,FaTimes  } from 'react-icons/fa';

interface Companies {
    icon: string
}
interface Cards {
    number: string;
    title: string;
    description: string;
}
function HomePage() {

    const [showVideo, setShowVideo] = useState<boolean>(false);

    const openVideo = (): void => {
        setShowVideo(true);
    };

    const closeVideo = (): void => {
        setShowVideo(false);
    };


    const Icons: Companies[] = [
        { icon: "https://elementorpress.com/templatekit-pro/layout95/wp-content/uploads/2023/10/logoipsome-5.png" },  // Microsoft
        { icon: "https://elementorpress.com/templatekit-pro/layout95/wp-content/uploads/2023/10/logo-ipsome4.png" },       // Apple
        { icon: "https://elementorpress.com/templatekit-pro/layout95/wp-content/uploads/2023/10/logoipsom2.png" },      // Amazon
        { icon: "https://elementorpress.com/templatekit-pro/layout95/wp-content/uploads/2023/10/logo-ipsom1.png" }, // Google
        { icon: "https://elementorpress.com/templatekit-pro/layout95/wp-content/uploads/2023/10/logo-ipsom.png" },
        { icon: "https://elementorpress.com/templatekit-pro/layout95/wp-content/uploads/2023/10/logoipsome-5.png" },

    ];

    const CardData: Cards[] = [
        {
            number: "1",
            title: "SEO Optimization",
            description: "PstrumEaque iEaque ipsa quae ab il vt quasi architecto beatae vitae nos srumEaque ipsa quae ab ill inventore ueritatis et quasi architect beataevit qe nostrumravtrad aavr."

        },
        {
            number: "2",
            title: "SEO Optimization",
            description: "PstrumEaque iEaque ipsa quae ab il vt quasi architecto beatae vitae nos srumEaque ipsa quae ab ill inventore ueritatis et quasi architect beataevit qe nostrumravtrad aavr."

        },
        {
            number: "3",
            title: "SEO Optimization",
            description: "PstrumEaque iEaque ipsa quae ab il vt quasi architecto beatae vitae nos srumEaque ipsa quae ab ill inventore ueritatis et quasi architect beataevit qe nostrumravtrad aavr."

        },
        {
            number: "4",
            title: "SEO Optimization",
            description: "PstrumEaque iEaque ipsa quae ab il vt quasi architecto beatae vitae nos srumEaque ipsa quae ab ill inventore ueritatis et quasi architect beataevit qe nostrumravtrad aavr."

        },
    ]

    return (
        <div>
            <HeroSection />
            <section className="max-w-screen-xl mx-auto mt-12 mb-5 bg-white ">
                <h1 className="mt-4 text-3xl font-bold text-center text-slate-700">Trusted by Over <span className="text-3xl text-orange-600 "> 30000+ </span> Companies </h1>
                <div className="grid grid-cols-1 md:grid-col-4 lg:grid-cols-6">
                    {Icons.map((company, index) =>
                        <>
                            <div key={index} className="flex items-center justify-center p-4">
                                <img src={company.icon} className="h-auto max-w-full" />
                            </div>
                        </>
                    )}

                </div>

            </section>
            <section className="bg-[#EBF1F3] py-16">
                <div className="max-w-screen-xl px-4 mx-auto">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="flex items-center justify-center">
                            <div className="pl-6 border-l-[12px] border-orange-600">
                                <label className="text-orange-600 text-md">Our Services</label>
                                <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                                    Our Benefit We Can Offer To You
                                </h1>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <p className="text-lg text-slate-700">
                                Duis aute irure dolor in reprehendeirure dolor irit in volut ate velit esse cillum dolDuis aute irure dolor in ore accu santium fugiat nulla pariatur.
                            </p>
                        </div>
                    </div>

                    <div className="grid max-w-screen-xl grid-cols-1 gap-6 px-4 mx-auto mt-16 md:mt-36 md:grid-cols-2 lg:grid-cols-3">
                        <div className="flex items-center justify-center w-64 h-64 col-span-1 p-4 mx-auto md:col-span-2 lg:w-auto lg:h-auto ">
                            <button className="relative" onClick={openVideo}>
                                <FaPlay className="absolute top-[-14px] left-[-14px] z-10 text-3xl text-white" />
                                <span className="absolute inset-0 flex items-center justify-center">
                                    {/* First pulse */}
                                    <span className="absolute w-10 h-10 bg-orange-600 rounded-full opacity-75 animate-pulse"></span>
                                    {/* Second pulse */}
                                    <span className="absolute w-20 h-20 bg-orange-600 rounded-full opacity-75 animate-pulse"></span>
                                    {/* Third pulse */}
                                    <span className="absolute w-40 h-40 bg-orange-600 rounded-full opacity-75 animate-pulse"></span>
                                </span>
                            </button>

                        </div>
                        {showVideo && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
                                <div className="relative z-20">
                                    <button className="absolute text-2xl text-white top-4 right-4" onClick={closeVideo}>
                                        <FaTimes className="text-4xl text-red-800 " />
                                    </button>

                                    <iframe className=" h-[200px] w-[300px] md:w-[600px] md:h-[400px] lg:w-[700px] lg:h-[500px] z-30"
                                        src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                    </iframe>
                                </div>
                            </div>
                        )}
                        {CardData.map((e, index) => (
                            <div key={index}>
                                <Card number={e.number} title={e.title} description={e.description} />
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
}

export default HomePage;