import React from 'react';

interface ContactCardProps {
  icon: JSX.Element;
  title: string;
  content: string | string[];
  buttonText: string;
  buttonLink: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, content, buttonText, buttonLink }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 m-2 text-center bg-white border-black shadow-lg md:p-20 hover:border-2">
      <div className="flex items-center justify-center w-24 h-24 mt-2 mb-4 text-white bg-black rounded-full hover:bg-orange-600">
        {icon}
      </div>
      <h2 className="mt-2 mb-2 text-xl font-semibold">{title}</h2>
      {Array.isArray(content) ? (
        content.map((line, index) => <p key={index}>{line}</p>)
      ) : (
        <p>{content}</p>
      )}
      <a href={buttonLink}  className="inline-block mt-4 font-bold hover:text-orange-600">
        {buttonText}
      </a>
    </div>
  );
};

export default ContactCard;
