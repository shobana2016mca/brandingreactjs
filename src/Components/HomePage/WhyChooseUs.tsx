import * as React from 'react';

interface IAppProps {
}

const WhyChooseUs: React.FunctionComponent<IAppProps> = () => {
  return (<>
  <div className="flex flex-col items-center text-white bg-[#19191F]">
      <div className="max-w-screen-xl mx-auto mt-8 text-center">
        <p className='mt-16 mb-2 text-lg text-orange-600'>Why Choose Us</p>
        <h1 className="mb-4 text-2xl font-bold md:text-4xl">Why SEO Service is Important For Your Business?</h1>
        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          <div className="flex justify-center max-w-[540px] p-4 mx-auto ">
            <img src="Why-Choose-Us-img.png" alt="SEO" className="object-contain max-w-full " />
          </div>
          
          <div className="p-4 ">
            <div className="grid grid-cols-1 gap-16 text-left lg:grid-cols-2 ">
              <div className="mb-4 max-w-[280px] ">
                <img src="Why-Choose-Us-logo-1.png" alt="Link Building" className="w-16 h-16 mb-4 mr-2"/>
                <h2 className="mb-4 text-xl font-semibold">Link Building</h2>
                <p className="mb-4">Eaque ipsa quae ab illo invent ruitats et quasi architecto be vitae nostrum.</p>
              </div>
             

              <div className="mb-4 max-w-[280px] ">
                <img src="Why-Choose-Us-logo-2.png" alt="Email Marketing" className="w-16 h-16 mb-4 mr-2"/>
                <h2 className="mb-4 text-xl font-semibold ">Email Marketing</h2>
                <p className="mb-4">Necessitatibus saepe eveniet voluptates repudiandae mole non recusandae.</p>
              </div>
             

              <div className="mb-4 max-w-[280px] ">
                <img src="Why-Choose-Us-log-3.png" alt="Optimization" className="w-16 h-16 mb-4 mr-2"/>
                <h2 className="mb-4 text-xl font-semibold">Optimization</h2>
                <p className="mb-4">Molestiae non recusandae ita rerum hic tenetur a sapien le reiciendis nobis.</p>
              </div>
              

              <div className="mb-4 max-w-[280px] ">
                <img src="Why-Choose-Us-logo.png" alt="Development" className="w-16 h-16 mb-4 mr-2"/>
                <h2 className="mb-4 text-xl font-semibold">Development</h2>
                <p className="mb-4">Consectetur adipiscing elit rellus luctus nec ullamcorper pulvinar dapibus leo.</p>
              </div>
            
            </div>
            <div className='flex '>
            <button className="px-4 py-2 mt-4 text-white bg-orange-600 ">
              Know More About keywordly
            </button>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  
  </>)
};

export default WhyChooseUs;
