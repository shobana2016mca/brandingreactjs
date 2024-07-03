import React from 'react';
import { Link } from 'react-router-dom';

interface NewsBlog {
  id: number;
  image: string;
  title: string;
}

interface NewsBlogsProps {
  newsBlogs: NewsBlog[];
  isVisible: boolean;
}

export function formatTitle(title : string) {
    return title.toLowerCase().split(' ').join('-');
  }

const NewsBlogs: React.FC<NewsBlogsProps> = ({ newsBlogs, isVisible }) => {
  return (
    <div className="mt-10 lg:mt-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {newsBlogs.map((newsBlog) => (
          <div 
            key={newsBlog.id} 
            className={`flex flex-col items-center text-center ${isVisible ? 'animate-fadeUp' : ''}`}
          >
            <img 
              loading="lazy" 
              src={`/${newsBlog.image}`} 
              alt={newsBlog.title} 
              className="object-cover w-full h-58 animate-fadeUp" 
            />
            <Link
               to={`/blog/${newsBlog.id}/${formatTitle(newsBlog.title)}`}
              className="mt-4 font-bold leading-6 text-left text-gray-900 text-md md:text-lg hover:text-orange-600"
            >
              {newsBlog.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBlogs;
