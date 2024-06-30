// src/NotFoundPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import useIntract from './useIntract';

const Error404: React.FC = () => {
    const { ref, isVisible } = useIntract();
  return (
    <div className='w-full text-orange-600 bg-gradient-to-r from-teal-100 to-orange-100 '>

   
    <div ref={ref} className="flex flex-col items-center justify-center max-w-screen-xl min-h-screen mx-auto text-orange-600 ">
      <div className={`flex items-center justify-center space-x-4 text-6xl font-bold text-indigo-900 md:text-9xl ${isVisible ? 'animate-popup ' : '  '} `}>
        <span>4</span>
        <span role="img" aria-label="sad face" className="text-6xl text-orange-600 md:text-9xl">
          😢
        </span>
        <span>4</span>
      </div>

      <h1 className={`mt-4 text-2xl font-bold text-center md:text-4xl ${isVisible ? 'animate-popup ' : '  '} `}>We Could Not Find The Page You’re Looking For</h1>
      <p className={`mt-2 text-center text-gray-600 ${isVisible ? 'animate-popup ' : '  '} `}>The link you’re trying to access is probably broken, or the page has been removed.</p>
      
      <Link to='/' className={`px-6 py-3 mt-6 text-lg text-white bg-orange-600 hover:bg-orange-700 focus:outline-none ${isVisible ? 'animate-popup ' : '  '} `}>
        Go Back To Home Page
      </Link>
    </div>
    </div>
  );
};

export default Error404;
