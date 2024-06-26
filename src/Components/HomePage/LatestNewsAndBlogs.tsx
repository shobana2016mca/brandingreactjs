import React from 'react';

interface NewsBlog {
  id: number;
  image: string;
  title: string;
  link:string;
}

const newsBlogs: NewsBlog[] = [
  { id: 1, image: 'single-post-img.jpg', title: 'Use keywords strategically throughout the blog post.',link:"" },
  { id: 2, image: 'single-post-img1.jpg', title: 'What is SEO? An explanation for beginners',link:"" },
  { id: 3, image: 'single-post-img2.jpg', title: 'What is SEO? An explanation for beginners' ,link:""},
];

const LatestNewsAndBlogs: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold tracking-wide text-orange-600 uppercase">News and Updates</h2>
          <p className="mt-2 text-4xl font-extrabold leading-8 tracking-tight text-gray-900 md:text-7xl">
            Latest News and Blogs
          </p>
        </div>

        <div className="mt-10 lg:mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {newsBlogs.map((newsBlog) => (
              <div key={newsBlog.id} className="flex flex-col items-center text-center">
                <img src={newsBlog.image} alt={newsBlog.title} className="object-cover w-full h-58" />
                <a href={newsBlog.link} className="mt-4 font-bold leading-6 text-left text-gray-900 text-md md:text-lg hover:text-orange-600">{newsBlog.title}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNewsAndBlogs;
