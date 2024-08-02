import * as React from 'react';
import useIntract from './useIntract';

interface ICenterHeaderProps {
    heading : string,
    subHeading: string
}

const CenterHeader: React.FunctionComponent<ICenterHeaderProps> = ({heading, subHeading}) => {
  const { ref, isVisible } = useIntract();

  return (<>
  
  <div ref={ref} className={` text-center mb:mt-14 ${isVisible ? 'animate-fadeUp ' : '  '} `}>
          <h2 className="text-lg font-semibold tracking-wide text-orange-600 uppercase">{heading}</h2>
          <p className="mt-2 text-4xl font-bold leading-8 tracking-tight text-gray-900 md:text-6xl">
            {subHeading}
          </p>
        </div>
  
  </>) ;
};

export default CenterHeader;
