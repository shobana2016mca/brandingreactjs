import * as React from 'react';
import BreadCrumbComponent from '../Components/GlobalComponents/BreadCrumbComponent';
import GenerateTraffic from '../Components/HomePage/GenerateTraffic';
import StatusCard from '../Components/HomePage/StatusCard';
import FindProgress from '../Components/HomePage/FindProgress';
import ProfileCard from '../Components/AboutUs/ProfileCard'
import Compines from '../Components/HomePage/Compines';
import { Helmet } from "react-helmet";


interface IAppProps {
}
const stats = [
    { title: "Business Ideas", icon: "Business-Ideas-logo.png", count: 0 },
    { title: "Media Posts", icon: "Media-Posts-logo.png", count: 0 },
    { title: "Happy Customers", icon: "Happy-Customers-logo.png", count: 0 },
    {
      title: "Finished Projects",
      icon: "Finished-Projects-logo.png",
      count: 0,
    },
  ];
  
const AboutUs: React.FunctionComponent<IAppProps> = () => {
  return (<>
  
  <Helmet>
        <title>About Us - My Awesome Company</title>
        <meta name="description" content="Learn more about My Awesome Company, our mission, vision, and values. We are dedicated to providing the best service." />
        <meta name="keywords" content="about us, company, mission, vision, values, services" />
        <meta property="og:title" content="About Us - My Awesome Company" />
        <meta property="og:description" content="Learn more about My Awesome Company, our mission, vision, and values. We are dedicated to providing the best service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.myawesomecompany.com/about" />
        <meta property="og:image" content="http://www.myawesomecompany.com/about-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@myawesomecompany" />
        <meta name="twitter:title" content="About Us - My Awesome Company" />
        <meta name="twitter:description" content="Learn more about My Awesome Company, our mission, vision, and values. We are dedicated to providing the best service." />
        <meta name="twitter:image" content="http://www.myawesomecompany.com/about-image.jpg" />
        <link rel="canonical" href="http://www.myawesomecompany.com/about" />
      </Helmet>

            <BreadCrumbComponent/>
            <GenerateTraffic/>
            <section className=" bg-[#EBF1F3] w-full  ">
        <div className="max-w-screen-xl p-2 pt-12 mx-auto md:pt-24 ">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 ">
            {stats.map((stat) => (
              <StatusCard
                key={stat.title}
                title={stat.title}
                icon={stat.icon}
                count={stat.count}
              />
            ))}
          </div>
        </div>
      </section>
      <FindProgress/>
      <ProfileCard/>
      <Compines/>
      
         </>);
};

export default AboutUs;
