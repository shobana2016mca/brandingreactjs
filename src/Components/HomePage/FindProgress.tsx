import useIntract from "../GlobalComponents/useIntract";
import { Link } from "react-router-dom";

function FindProgress() {
  const { ref, isVisible } = useIntract();

  return (
    <div className="relative w-full" ref={ref}>
      <div className=" absolute top-0 bg-[#19191F] w-full h-[90%] -z-10 "></div>
      <div className="max-w-screen-xl mx-auto max-md:flex max-md:flex-col-reverse md:grid md:grid-cols-2">
        <section
          className={`md:max-w-[460px] w-full p-3 mt-8 mx-auto ${isVisible ? "animate-fadeUp" : "  "}`}
        >
          <img
            alt="progeress"
            loading="lazy"
            src="find-progress.png"
            className="object-contain h-auto max-w-full animate-fadeUp "
          />
        </section>
        <section className="flex flex-col justify-center ">
          <div
            className={`flex items-center justify-center p-6 mt-8 ${isVisible ? "animate-fadeUp" : "  "} `}
          >
            <div className="w-full max-w-md">
              <h2 className="text-sm font-semibold text-red-500">
                FIND PROGRESS
              </h2>
              <h1 className="mt-2 text-4xl font-bold text-white">
                Test your Website with Keywordly SEO!
              </h1>
              <p className="mt-4 text-gray-400">
                Enhance your online visibility, improve search engine rankings,
                and attract more traffic. Our expert keyword analysis and
                customized SEO strategies ensure your website stands out.
                Optimize with Keywordly SEO and achieve your digital marketing
                goals effortlessly.
              </p>
              <div className="flex items-center justify-center mt-8">
                {/* <input
                  type="text"
                  placeholder="Enter Web URL"
                  className="w-full max-w-xs px-4 py-2 text-black bg-white md:max-w-md lg:max-w-lg xl:max-w-xl focus:outline-none"
                /> */}
                {/* <button className="max-w-full px-4 py-3 text-sm text-white bg-orange-600 focus:outline-none">
                  Analyze
                </button> */}
                <Link
                  to="/about-us"
                  className="p-3 mx-auto text-white bg-orange-600 w-fit"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FindProgress;
