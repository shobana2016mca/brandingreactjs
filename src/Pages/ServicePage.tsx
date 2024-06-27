import BreadCrumbComponent from "../Components/GlobalComponents/BreadCrumbComponent";
import FindProgress from "../Components/HomePage/FindProgress";
import LatestNewsAndBlogs from "../Components/HomePage/LatestNewsAndBlogs";
import PricingPlans from "../Components/HomePage/PricingPlans";
import Services from "../Components/HomePage/Services";
import WhyChooseUs from "../Components/HomePage/WhyChooseUs";

function ServicePage() {
    return (
        <div>
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