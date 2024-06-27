import * as React from 'react';

interface ICenterHeaderProps {
    heading : string,
    subHeading: string
}

const CenterHeader: React.FunctionComponent<ICenterHeaderProps> = ({heading, subHeading}) => {
  return (<>
  
        <div className="text-center mt-14 ">
          <h2 className="text-lg font-semibold tracking-wide text-orange-600 uppercase">{heading}</h2>
          <p className="mt-2 text-4xl font-bold leading-8 tracking-tight text-gray-900 md:text-6xl">
            {subHeading}
          </p>
        </div>
  
  </>) ;
};

export default CenterHeader;
