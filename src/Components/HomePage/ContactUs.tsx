import * as React from 'react';
import useIntract from "../GlobalComponents/useIntract";

interface IAppProps {
}

const ContactUs: React.FunctionComponent<IAppProps> = () => {
  const { ref, isVisible } = useIntract();
  return (<>
<div className="flex flex-col items-center max-md:bg-black-white md:bg-[#19191F] xl:bg-black-white p-2 " ref={ref}>
      <div className="flex flex-col-reverse max-w-screen-xl gap-8 mx-auto mt-8 md:flex-row">
        <div className={` max-w-[590px] mt-4 ${isVisible ? 'animate-fadeUp ' : '  '} `}>
          <img src="Get-in-Touch-img.png" loading="lazy" alt="Working" className="object-contain max-w-full animate-fadeUp " />
        </div>
        <div className={`flex flex-col items-center justify-center mt-4 ${isVisible ? 'animate-fadeUp ' : '  '} `}>
        <div className="pl-8 mb-4 border-l-8 border-orange-600 ">
              <p className="mb-3 text-lg text-orange-600 ">GET IN TOUCH</p>
              <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl lg:text-6xl ">
              Send us a Message
              </h1>
            </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input 
                type="text" 
                placeholder="Name" 
                className="p-3 m-2 text-black md:mt-4 focus:outline-none " 
              />
              <input 
                type="text" 
                placeholder="Phone" 
                className="p-3 m-2 text-black md:mt-4 focus:outline-none " 
              />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="p-3 m-2 text-black md:mt-4 focus:outline-none " 
              />
              <input 
                type="text" 
                placeholder="Website URL" 
                className="p-3 m-2 text-black md:mt-4 focus:outline-none " 
              />
            </div>
            <textarea 
            
              placeholder="Message" 
              className="h-32 w-[96%] col-span-1 p-2 m-2 text-black  md:mt-4 md:col-span-2 focus:outline-none" 
            />
            <button 
              type="submit" 
              className="px-4 py-2 mt-4 text-white bg-orange-600 md:mt-4 hover:bg-orange-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  
  </>
  )
};

export default ContactUs;
