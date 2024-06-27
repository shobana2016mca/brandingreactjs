import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SideBorderHeading from '../GlobalComponents/SideBoderHeading';

interface SocialMediaLinks {
    facebook: string;
    twitter: string;
    instagram: string;
  }
  
  interface TeamMember {
    name: string;
    role: string;
    image: string; // Replace with actual image URLs
    socialMedia: SocialMediaLinks;
  }

    
const teamMembers: TeamMember[] = [
    {
      name: "Archer Barlow",
      role: "Sales Manager",
      image: "our-team-img-1.jpg", // Replace with actual image URLs
      socialMedia: {
        facebook: "https://facebook.com/archer",
        twitter: "https://twitter.com/archer",
        instagram: "https://instagram.com/archer",
      },
    },
    {
      name: "Freddy Mcphee",
      role: "CEO & Founder",
      image: "our-team-4.jpg", // Replace with actual image URLs
      socialMedia: {
        facebook: "https://facebook.com/freddy",
        twitter: "https://twitter.com/freddy",
        instagram: "https://instagram.com/freddy",
      },
    },
    {
      name: "Valerie Allison",
      role: "HR Manager",
      image: "our-team-3.jpg", // Replace with actual image URLs
      socialMedia: {
        facebook: "https://facebook.com/valerie",
        twitter: "https://twitter.com/valerie",
        instagram: "https://instagram.com/valerie",
      },
    },
    {
      name: "Archer Barlow",
      role: "Sales Manager",
      image: "our-team-2.jpg", // Replace with actual image URLs
      socialMedia: {
        facebook: "https://facebook.com/archer",
        twitter: "https://twitter.com/archer",
        instagram: "https://instagram.com/archer",
      },
    },
  ];



export default function TeamSection() {
  return (
    <div className='w-full py-12 mt-10'>
      <div className='max-w-screen-xl mx-auto '>
        <div className='mb-16 md:mb-24 '>
        <SideBorderHeading heading='OUR TEAM MEMBERS' subHeading='Meet Our Talented Creatives'/>
        </div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className='flex justify-center w-full px-4 mb-8'>
              <div className='relative w-64 overflow-hidden bg-white shadow-lg group'>
                <img
                  src={member.image}
                  alt={member.name} 

                  className='object-cover h-full max-w-full'
                />
                
                <div className='absolute inset-0 flex flex-col items-center justify-center transition transform translate-y-full bg-black bg-opacity-50 group-hover:translate-y-0'>
                <div className='w-56 p-2 mx-auto text-center'>
                  <h3 className='mb-2 text-xl font-bold text-white'>{member.name}</h3>
                  <p className='text-white'>{member.role}</p>
                </div>
                  <div className='flex space-x-4 text-center text-white'>
                    <Link
                      to={member.socialMedia.facebook}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='px-2 py-2 text-lg text-white border border-white '>
                      <FaFacebookF />
                    </Link>
                    <Link
                      to={member.socialMedia.twitter}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='px-2 py-2 text-lg text-white border border-white '>
                      <FaTwitter />
                    </Link>
                    <Link
                      to={member.socialMedia.instagram}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='px-2 py-2 text-lg text-white border border-white '>
                      <FaInstagram />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
