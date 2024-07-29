import BreadCrumbComponent from "../Components/GlobalComponents/BreadCrumbComponent";
import FindProgress from "../Components/HomePage/FindProgress";
import LatestNewsAndBlogs from "../Components/HomePage/LatestNewsAndBlogs";
import PricingPlans from "../Components/HomePage/PricingPlans";
import Services from "../Components/HomePage/Services";
import WhyChooseUs from "../Components/HomePage/WhyChooseUs";
import { Helmet } from "react-helmet";

function ServicePage() {
    return (
        <div>
             <Helmet>
        <title>Our Services - Branding Solutions</title>
        <meta name="description" content="Learn about the wide range of services offered by My Awesome Company. We provide exceptional solutions to meet your needs." />
        <meta name="keywords" content="services, solutions, my awesome company" />
        <meta property="og:title" content="Our Services - My Awesome Company" />
        <meta property="og:description" content="Learn about the wide range of services offered by My Awesome Company. We provide exceptional solutions to meet your needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.myawesomecompany.com/services" />
        <meta property="og:image" content="http://www.myawesomecompany.com/services-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@myawesomecompany" />
        <meta name="twitter:title" content="Our Services - My Awesome Company" />
        <meta name="twitter:description" content="Learn about the wide range of services offered by My Awesome Company. We provide exceptional solutions to meet your needs." />
        <meta name="twitter:image" content="http://www.myawesomecompany.com/services-image.jpg" />
        <link rel="canonical" href="http://www.myawesomecompany.com/services" />
      </Helmet>
            <BreadCrumbComponent/>
            <Services/>
            <FindProgress/>
            <PricingPlans/>
            <WhyChooseUs/>
            <LatestNewsAndBlogs/>
            

            
        </div>
    );
}

export default ServicePage;