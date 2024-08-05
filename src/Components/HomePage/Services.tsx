import { useState } from "react";
import Card from "./Card";
import { FaPlay, FaTimes } from "react-icons/fa";
import useIntract from "../GlobalComponents/useIntract";
interface Cards {
  number: string;
  title: string;
  description: string;
}
function Services() {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const { ref, isVisible } = useIntract();

  const openVideo = (): void => {
    setShowVideo(true);
  };

  const closeVideo = (): void => {
    setShowVideo(false);
  };

  const CardData: Cards[] = [
    {
      number: "1",
      title: "Website Development",
      description:
        "Branding Solutions delivers expert website development with responsive designs, seamless navigation, and robust functionality, ensuring a captivating online presence that drives business growth and engages your audience.",
    },
    {
      number: "2",
      title: "SEO Optimization",
      description:
        "Our Branding Solutions company offers comprehensive SEO optimization services to enhance your online visibility. We specialize in keyword research, on-page and off-page optimization, technical SEO, and content strategy to improve search engine rankings, drive organic traffic, and boost your brand's digital presence effectively.",
    },
    {
      number: "3",
      title: "Online Marketing",
      description:
        "Branding Solutions offers comprehensive online marketing services, including SEO, PPC, social media management, content marketing, and email campaigns. Our strategies enhance your brand visibility, drive traffic, and boost conversions. Partner with us to achieve your digital marketing goals and elevate your online presence.",
    },
    {
      number: "3",
      title: "PPC Services",
      description:
        "Our PPC services drive targeted traffic and maximize ROI with expertly managed campaigns across Google Ads, Bing Ads, and social media platforms. We offer strategic keyword research, ad creation, bid management, and performance analysis to ensure your brand achieves optimal visibility and conversion rates in a competitive digital landscape.",
    },
    {
      number: "4",
      title: "Email Marketing",
      description:
        "Experience the power of targeted email marketing with Branding Solutions. Our expert team creates personalized campaigns that engage your audience, drive conversions, and boost your brand visibility. Harness the potential of data-driven strategies to deliver impactful messages directly to your customers' inboxes. Elevate your marketing with us.",
    },
    {
      number: "5",
      title: "Branding Awareness",
      description:
        "Boost your brand's visibility with our comprehensive branding awareness services. At Branding Solutions, we specialize in creating impactful marketing strategies, engaging content, and eye-catching designs that resonate with your target audience. Elevate your brand recognition and stand out in a crowded market with our expert solutions.",
    },
    {
      number: "6",
      title: "UI/UX designs",
      description:
        "Our branding solutions company offers comprehensive UI/UX design services, crafting visually stunning and intuitive interfaces that enhance user experiences. We specialize in creating cohesive, user-centric designs that align with your brand identity, ensuring seamless interactions and improved customer satisfaction across all digital platforms.",
    },

    {
      number: "7",
      title: "Radio Adversting",
      description:
        "Boost your brand with our expert radio advertising services! We craft engaging, impactful radio spots that captivate your audience and drive results. From scriptwriting to production, we handle it all. Amplify your message and connect with listeners—choose our branding solutions company for effective radio advertising today!",
    },
    {
      number: "8",
      title: "Bulk sms",
      description:
        "Branding Solutions offers a comprehensive Bulk SMS service to enhance your business communications. Our platform ensures reliable, instant delivery of promotional and transactional messages, boosting engagement and customer reach. With user-friendly tools and detailed analytics, manage your campaigns efficiently and effectively. Elevate your brand's messaging with us today!",
    },
  ];
  return (
    <section className="bg-[#EBF1F3] py-16 " ref={ref}>
      <div
        className={`max-w-screen-xl px-4 mx-auto ${isVisible ? "animate-fadeUp" : "  "} `}
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <div
              className={`pl-6 border-l-[12px] border-orange-600 ${isVisible ? "animate-fadeUp" : "  "} `}
            >
              <label className="text-orange-600 text-md">Our Services</label>
              <h1
                className={`text-3xl font-bold md:text-4xl lg:text-5xl ${isVisible ? "animate-fadeUp" : "  "} `}
              >
                Our Benefit We Can Offer To You
              </h1>
            </div>
          </div>
          {/* <div className="flex items-center">
            <p className="text-lg text-slate-700">
              we provide unparalleled value to help your business thrive. Our
              benefits include:
            </p>
          </div> */}
        </div>

        <div className="grid max-w-screen-xl grid-cols-1 gap-6 px-4 mx-auto mt-16 md:mt-36 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative flex items-center justify-center w-full h-full col-span-1 p-4 mx-auto md:col-span-2 lg:w-auto lg:h-auto ">
            <img className="object-contain w-full " src="websitedesign.png" />
            <div className="absolute top-1/2 left-1/2">
              <div className="relative" onClick={openVideo}>
                <FaPlay className="absolute top-[-14px] left-[-14px] z-10 text-3xl text-white" />
                <span className="absolute inset-0 flex items-center justify-center">
                  {/* First pulse */}
                  <span className="absolute w-10 h-10 bg-orange-600 rounded-full opacity-75 animate-pulse"></span>
                  {/* Second pulse */}
                  <span className="absolute w-20 h-20 bg-orange-600 rounded-full opacity-75 animate-pulse"></span>
                  {/* Third pulse */}
                  <span className="absolute w-40 h-40 bg-orange-600 rounded-full opacity-75 animate-pulse"></span>
                </span>
              </div>
            </div>
          </div>
          {showVideo && (
            <div
              className={`fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-75 ${isVisible ? "animate-fadeUp" : "  "}  `}
            >
              <div className="relative z-20">
                <button
                  className="absolute text-2xl text-white top-4 right-4"
                  onClick={closeVideo}
                >
                  <FaTimes className="text-4xl text-red-800 " />
                </button>

                <iframe
                  className=" h-[200px] w-[300px] md:w-[600px] md:h-[400px] lg:w-[700px] lg:h-[500px] z-30"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                ></iframe>
              </div>
            </div>
          )}

          {CardData.map((e, index) => (
            <div key={index}>
              <Card
                number={e.number}
                title={e.title}
                description={e.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
