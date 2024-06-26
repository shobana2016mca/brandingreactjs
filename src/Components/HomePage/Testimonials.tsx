import * as React from "react";

interface IAppProps {}

const Testimonials: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <section className="w-full p-5 max-md:bg-white-black xl:bg-white-black md:p-20">
        
        <div className="grid max-w-screen-xl grid-cols-1 gap-2 mx-auto md:grid-cols-2">
          <div className="">
            <div className="pl-8 border-l-8 md:border-l-[12px] border-orange-600 md:pl-16 ">
              <p className="mt-8 mb-3 text-lg text-orange-600 ">TESTIMONIALS</p>
              <h1 className="mb-2 text-3xl font-bold md:text-4xl lg:text-6xl ">
                What Our Satisfied Clients are Saying!
              </h1>
            </div>
            <p className="mt-4 text-lg text-slate-700">
              “Sed ruia non numquam eius modi tempora incidunt ut labore uam
              dolore magnam aliruam quaerat voluptatem autenim ad mini quae
              veniam nostrum exercita ionem ullam molestiae non recusanrarav
              Itaque earum rerum auic.”
            </p>
            <div className="flex gap-1 mt-4 ">
              <div className="w-20 h-20 rounded-full ">
                <img
                  src="home-03-testimonials-img1.png"
                  className="object-contain max-w-full rounded-full "
                />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3 className="text-xl font-bold text-orange-600 ">
                  Kevin Andrew
                </h3>
                <p className="text-gray-700 ">CEO - Company</p>
              </div>
            </div>
          </div>

          <div className=" max-w-[590px] h-auto mx-auto mt-4  flex items-center justify-center">
            <img src="Testimonials-img.png" className="object-contain max-w-full "/>
          </div>


        </div>
      </section>
    </>
  );
};

export default Testimonials;
