import React from 'react';
import useIntract from "../GlobalComponents/useIntract";

type Plan = {
  title: string;
  price: number;
  link:string;
  features: string[];
};

const plans: Plan[] = [
  {
    title: 'Page Optimization',
    price: 19.99,
    link:"",
    features: [
      'One way link building',
      'Social media marketing',
      '30 directory submissions',
      'Eorem psum dolor sit amet',
      'Areapear seomnis isatus',
    ],
  },
  {
    title: 'Local SEO',
    price: 13.75,
    link:"",
    features: [
      'Social Media Marketing',
      '3,100 Keywords',
      'One Way Link Building',
      '10 Free Optimization',
      '5 Press Releases',
    ],
  },
  {
    title: 'SEO Audit',
    price: 19.99,
    link:"",
    features: [
      'Keyword Research & Analysis',
      'Google Analytics',
      'UI/UX rich',
      'See Job Posting Stat',
      'Web site Analysis',
    ],
  },
];

const PricingPlans: React.FC = () => {

  const { ref, isVisible } = useIntract();

  return (
    <div className="py-12 " ref={ref}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 pl-12 border-l-[10px] border-orange-600">
          <h2 className="text-lg font-semibold tracking-wide text-orange-600 uppercase">Our Pricing</h2>
          <p className="mt-2 text-2xl font-bold leading-8 tracking-tight text-gray-900 md:text-6xl sm:text-4xl">
            Affordable Pricing Plans
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index} className={`p-10 bg-white border-t-2 border-black shadow-lg hover:border-orange-600 ${isVisible ? 'animate-fadeUp ' : '  '} `}>
              <h3 className="mb-4 text-xl font-semibold">{plan.title}</h3>
              <p className="mb-4 text-gray-500">Cum sociis natoque penatibus ethsff magnis dis parturient montes</p>
              <p className="mb-4 text-3xl font-bold">${plan.price.toFixed(2)} <span className="text-base font-medium">/Mo</span></p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="w-full px-4 py-3 text-black border-2 border-black hover:text-white hover:border-none hover:bg-orange-600">Get Started Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
