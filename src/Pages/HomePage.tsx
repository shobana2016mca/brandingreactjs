import HeroSection from "../Components/HomePage/HeroSection";
import FindProgress from "../Components/HomePage/FindProgress";
import GenerateTraffic from "../Components/HomePage/GenerateTraffic";
import StatusCard from "../Components/HomePage/StatusCard";

import WhyChooseUs from "../Components/HomePage/WhyChooseUs";

import ContactUs from "../Components/HomePage/ContactUs";

import Compines from "../Components/HomePage/Companies";
import Services from "../Components/HomePage/Services";
import { Helmet } from "react-helmet";

function HomePage() {
  const stats = [
    { title: "Business Ideas", icon: "Business-Ideas-logo.png", count: 200 },
    { title: "Media Posts", icon: "Media-Posts-logo.png", count: 300 },
    { title: "Happy Customers", icon: "Happy-Customers-logo.png", count: 700 },
    {
      title: "Finished Projects",
      icon: "Finished-Projects-logo.png",
      count: 1000,
    },
  ];

  return (
    <div className="">
      <Helmet>
        <title>Branding Solutions</title>
        <meta
          name="description"
          content="Discover the amazing products and services offered by Welcome to Branding Solutions. We are committed to excellence and customer satisfaction."
        />
        <meta
          name="keywords"
          content="home, awesome company, products, services"
        />
        <meta property="og:title" content="Welcome to Branding Solutions" />
        <meta
          property="og:description"
          content="Discover the amazing products and services offered by Welcome to Branding Solutions. We are committed to excellence and customer satisfaction."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.myawesomecompany.com" />
        <meta
          property="og:image"
          content="http://www.myawesomecompany.com/home-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@myawesomecompany" />
        <meta name="twitter:title" content="Welcome to Branding Solutions" />
        <meta
          name="twitter:description"
          content="Discover the amazing products and services offered by Welcome to Branding Solutions. We are committed to excellence and customer satisfaction."
        />
        <meta
          name="twitter:image"
          content="http://www.myawesomecompany.com/home-image.jpg"
        />
        <link rel="canonical" href="http://www.myawesomecompany.com" />
      </Helmet>

      <HeroSection />
      <Compines />
      <Services />

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
      <WhyChooseUs />
      
      
      <ContactUs />
      
    </div>
  );
}

export default HomePage;
