import * as React from 'react';
import BreadCrumbComponent from '../Components/GlobalComponents/BreadCrumbComponent';
import GenerateTraffic from '../Components/HomePage/GenerateTraffic';
import StatusCard from '../Components/HomePage/StatusCard';
import FindProgress from '../Components/HomePage/FindProgress';
import ProfileCard from '../Components/AboutUs/ProfileCard'
import Compines from '../Components/HomePage/Compines';

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
