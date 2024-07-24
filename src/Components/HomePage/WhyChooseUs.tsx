import * as React from 'react';
import useIntract from "../GlobalComponents/useIntract";

interface IAppProps {

}
const card  = [
  {
    image:"Why-Choose-Us-logo-1.png",
    heading:"Link Building",
    paragraph:"Eaque ipsa quae ab illo invent ruitats et quasi architecto be vitae nostrum."
  },
  {
    image:"Why-Choose-Us-logo-2.png",
    heading:"Link Building",
    paragraph:"Eaque ipsa quae ab illo invent ruitats et quasi architecto be vitae nostrum."
  },
  {
    image:"Why-Choose-Us-log-3.png",
    heading:"Link Building",
    paragraph:"Eaque ipsa quae ab illo invent ruitats et quasi architecto be vitae nostrum."
  },
  {
    image:"Why-Choose-Us-logo.png",
    heading:"Link Building",
    paragraph:"Eaque ipsa quae ab illo invent ruitats et quasi architecto be vitae nostrum."
  },
]

const WhyChooseUs: React.FunctionComponent<IAppProps> = () => {

  const { ref, isVisible } = useIntract();

  return (<>
  <div className="flex flex-col items-center text-white bg-[#19191F]" ref={ref}>
      <div className="max-w-screen-xl mx-auto mt-8 text-center">
        <p className={`mt-16 mb-2 text-lg text-orange-600 ${isVisible ? 'animate-fadeUp ' : '  '} `}>Why Choose Us</p>
        <h1 className={`mb-4 text-2xl font-bold md:text-4xl ${isVisible ? 'animate-fadeUp ' : '  '} `}>Why SEO Service is Important For Your Business?</h1>
        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          <div className={`flex justify-center max-w-[540px] p-4 mx-auto ${isVisible ? 'animate-fadeUp ' : '  '}`}>
            <img  loading="lazy" src="Why-Choose-Us-img.png" alt="SEO" className="object-contain max-w-full animate-fadeUp " />
          </div>
          
          <div className={`p-4 ${isVisible ? 'animate-fadeUp ' : '  '} `}>
            <div className="grid grid-cols-1 gap-16 text-left lg:grid-cols-2 ">

              {card.map((e,index)=>(
                 <div className="mb-4 max-w-[280px] " key={index}>
                 <img src={e.image} alt={e.heading} loading="lazy" className="w-16 h-16 mb-4 mr-2"/>
                 <h2 className="mb-4 text-xl font-semibold">{e.heading}</h2>
                 <p className="mb-4">{e.paragraph}</p>
               </div>
              ))}
            
            </div>
            <div className='flex '>
            <button className="px-4 py-2 mt-4 text-white bg-orange-600 ">
              Know More About branding solutions
            </button>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  
  </>)
};

export default WhyChooseUs;
