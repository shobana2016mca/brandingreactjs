import React from 'react';
import useIntract from "../GlobalComponents/useIntract";

interface BorderHeading {
    heading: string;
    subHeading: string;
}

const SideBorderHeading: React.FC<BorderHeading> = ({ heading, subHeading }) => {
    const { ref, isVisible } = useIntract();
    return (
        <div className={`pl-8 mb-4 border-l-8 border-orange-600 md:ml-6 md:pl-16 bold ${isVisible ? 'animate-fadeUp ' : '  '} `} ref={ref}>
              <p className="mb-3 text-lg text-orange-600 ">{heading}</p>
              <h1 className="mb-2 text-3xl font-bold md:text-4xl lg:text-6xl ">
                {subHeading}
              </h1>
        </div>
    );
};

export default SideBorderHeading;
