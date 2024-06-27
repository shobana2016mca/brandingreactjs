import ContactCard from "../Components/AboutUs/ContactCard";
import BreadCrumbComponent from "../Components/GlobalComponents/BreadCrumbComponent";
import CenterHeader from "../Components/GlobalComponents/CenterHeader";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import ContactUs from "../Components/HomePage/ContactUs";
import Compines from "../Components/HomePage/Compines";

const contactDetails = [
    {
      icon: <FaMapMarkerAlt size={48} />,
      title: 'Location',
      content: '121 King Street, Melbourne Victoria 3000 Australia',
      buttonText: 'Get Directions',
      buttonLink: 'https://www.google.com/maps'
    },
    {
      icon: <FaPhoneAlt size={48} />,
      title: 'Phone',
      content: ['+61 3 8376 6284', '+800 2345 6789'],
      buttonText: 'Call Now',
      buttonLink: 'tel:+61383766284'
    },
    {
      icon: <FaEnvelope size={48} />,
      title: 'Email',
      content: ['info@keywordly.com', 'sales@keywordly.com'],
      buttonText: 'Email Now',
      buttonLink: 'mailto:info@keywordly.com'
    }
  ];


function ContactUsPage() {
    return (
        <div className=" bg-[#EBF1F3]">
            <BreadCrumbComponent/>
            <section className="max-w-screen-xl mx-auto ">
                <CenterHeader heading="CONTACT INFORMATION" subHeading="Get In Touch With Us"/>
                <div className="grid grid-cols-1 gap-3 mt-16 md:mt-32 lg:grid-cols-3 md:grid-cols-2">
                {contactDetails.map((detail, index) => (
                <ContactCard
                    key={index}
                    icon={detail.icon}
                    title={detail.title}
                    content={detail.content}
                    buttonText={detail.buttonText}
                    buttonLink={detail.buttonLink}
                    />
                ))}
                            </div>
            </section>

            <section className=" bg-gray-black">
                <div className="mt-6 p-6 md:p-16 max-md:h-[50vh] md:aspect-[26/9]">
                    <iframe
                        title={"Google Maps"}
                        id="map-canvas"
                        className=""
                        width="100%"
                        height="100%"
                        src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Plot no - 84 , jeevan nagar Wazirpur HUDA Road Greater Faridabad - 121002, Haryana, India&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                </div>
            </section>
            <ContactUs/>
            <Compines/>

        </div>
    );
}

export default ContactUsPage;