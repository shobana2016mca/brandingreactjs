
import HeroSection from "../Components/HomePage/HeroSection";
import FindProgress from "../Components/HomePage/FindProgress";
import GenerateTraffic from "../Components/HomePage/GenerateTraffic";
import StatusCard from "../Components/HomePage/StatusCard";
import PricingPlans from "../Components/HomePage/PricingPlans";
import WhyChooseUs from "../Components/HomePage/WhyChooseUs";
import Testimonials from "../Components/HomePage/Testimonials";
import ContactUs from "../Components/HomePage/ContactUs";
import LatestNewsAndBlogs from "../Components/HomePage/LatestNewsAndBlogs";
import Compines from "../Components/HomePage/Compines";
import Services from "../Components/HomePage/Services";



function HomePage() {


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



  return (
    <div className="">
      
      <HeroSection />
      <Compines/>
      <Services/>
      
      <FindProgress />
      <GenerateTraffic />
      <section className=" bg-[#EBF1F3] w-full  ">
        <div className="max-w-screen-xl p-2 mx-auto ">
          <div className="grid grid-cols-1 gap-2 pt-12 pb-12 md:grid-cols-2 lg:grid-cols-4 ">
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
      <WhyChooseUs/>
      <section className="bg-[#EBF1F3] w-full">
        <div className="max-w-screen-xl mx-auto "> 
            <PricingPlans/>
        </div>

      </section>
      <Testimonials/>
      <ContactUs/>
      <LatestNewsAndBlogs/>
    
    </div>
  );
}

export default HomePage;
