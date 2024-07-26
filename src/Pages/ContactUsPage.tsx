import ContactCard from "../Components/AboutUs/ContactCard";
import BreadCrumbComponent from "../Components/GlobalComponents/BreadCrumbComponent";
import CenterHeader from "../Components/GlobalComponents/CenterHeader";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import ContactUs from "../Components/HomePage/ContactUs";
import Compines from "../Components/HomePage/Companies";
import { Helmet } from "react-helmet";

const contactDetails = [
    {
      icon: <FaMapMarkerAlt size={48} />,
      title: 'Location',
      content: '56 Green Wood Avenue, Lane number 3, Near Krishna Mandir, Kuki Dhab, Jalandhar',
      buttonText: 'Get Directions',
      buttonLink: 'https://www.google.com/maps'
    },
    {
      icon: <FaPhoneAlt size={48} />,
      title: 'Phone',
      content: ['+91-90563-53599'],
      buttonText: 'Call Now',
      buttonLink: 'tel:+91-90563-53599'
    },
    {
      icon: <FaEnvelope size={48} />,
      title: 'Email',
      content: ['info@brandingsolutions.in'],
      buttonText: 'Email Now',
      buttonLink: 'mailto:info@brandingsolutions.in'
    }
  ];


function ContactUsPage() {
    return (
        <div className=" bg-[#EBF1F3]">
           <Helmet>
        <title>Contact Us - Branding Solutions Company</title>
        <meta name="description" content="Get in touch with Branding Solutionscompany. We are here to help you with any questions or concerns you may have." />
        <meta name="keywords" content="contact us, customer service, support, Branding company" />
        <meta property="og:title" content="Contact Us - My Awesome Company" />
        <meta property="og:description" content="Get in touch with Branding Solutions. We are here to help you with any questions or concerns you may have." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.myawesomecompany.com/contact" />
        <meta property="og:image" content="http://www.myawesomecompany.com/contact-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@myawesomecompany" />
        <meta name="twitter:title" content="Contact Us - Branding Solutions" />
        <meta name="twitter:description" content="Get in touch with Branding Solutions Company. We are here to help you with any questions or concerns you may have." />
        <meta name="twitter:image" content="http://www.myawesomecompany.com/contact-image.jpg" />
        <link rel="canonical" href="http://www.myawesomecompany.com/contact" />
      </Helmet>
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
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3409.7049800394416!2d75.56941737560214!3d31.28425477432292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDE3JzAzLjMiTiA3NcKwMzQnMTkuMiJF!5e0!3m2!1sen!2sin!4v1721834089968!5m2!1sen!2sin"
                    ></iframe>
                   </div>
            </section>
            <ContactUs/>
            <Compines/>

        </div>
    );
}

export default ContactUsPage;