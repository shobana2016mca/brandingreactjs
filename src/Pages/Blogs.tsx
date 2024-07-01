import React from 'react';
import useIntract from '../Components/GlobalComponents/useIntract';
import NewsBlogs from '../Components/GlobalComponents/NewsBlogs';
import BreadCrumbComponent from '../Components/GlobalComponents/BreadCrumbComponent';


interface NewsBlog {
  id: number;
  image: string;
  title: string;
}

const newsBlogs: NewsBlog[] = [
  { id: 1, image: 'single-post-img.jpg', title: 'Use keywords strategically throughout the blog post.', },
  { id: 2, image: 'single-post-img1.jpg', title: 'What is SEO? An explanation for beginners', },
  { id: 3, image: 'single-post-img2.jpg', title: 'What is SEO? An explanation for beginners' ,},
  { id: 4, image: 'single-post-img.jpg', title: 'Use keywords strategically throughout the blog post.', },
  { id: 5, image: 'single-post-img1.jpg', title: 'What is SEO? An explanation for beginners', },
  { id: 6, image: 'single-post-img2.jpg', title: 'What is SEO? An explanation for beginners' ,},
  { id: 7, image: 'single-post-img.jpg', title: 'Use keywords strategically throughout the blog post.', },
  { id: 8, image: 'single-post-img1.jpg', title: 'What is SEO? An explanation for beginners', },
  { id: 9, image: 'single-post-img2.jpg', title: 'What is SEO? An explanation for beginners' ,},
  { id: 10, image: 'single-post-img.jpg', title: 'Use keywords strategically throughout the blog post.', },
  { id: 11, image: 'single-post-img1.jpg', title: 'What is SEO? An explanation for beginners', },
  { id: 12, image: 'single-post-img2.jpg', title: 'What is SEO? An explanation for beginners' ,},
];

const Blogs: React.FC = () => {
  const { ref, isVisible } = useIntract();
  return (
    <div className='w-full '>
        <BreadCrumbComponent/>
  <div className='max-w-screen-xl mx-auto '>
    <div className="py-12 bg-white" ref={ref}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className={` text-center ${isVisible ? 'animate-fadeUp ' : '  '} `}>
          <h2 className="text-lg font-semibold tracking-wide text-orange-600 uppercase">News and Updates</h2>
          <p className="mt-2 text-4xl font-extrabold leading-8 tracking-tight text-gray-900 md:text-7xl">
            Latest News and Blogs
          </p>
        </div>
        <NewsBlogs newsBlogs={newsBlogs} isVisible={true} />
      </div>
    </div>
    </div>
</div>
  );
}

export default Blogs;
