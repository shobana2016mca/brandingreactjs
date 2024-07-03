import React from 'react';
import useIntract from '../Components/GlobalComponents/useIntract';
import NewsBlogs from '../Components/GlobalComponents/NewsBlogs';
import BreadCrumbComponent from '../Components/GlobalComponents/BreadCrumbComponent';
import { newsBlogs } from "../../Constants";
import { useParams } from 'react-router-dom';
import CenterHeader from '../Components/GlobalComponents/CenterHeader';


const Blogs: React.FC = () => {
  const { category } = useParams();
  const categoryBlogs = newsBlogs.filter((e)=> e.category == category);
  window.scrollTo(0, 0); 

  console.log(category);
  const { ref, isVisible } = useIntract();
  return (
    <div className='w-full '>
    {category == undefined ? (<BreadCrumbComponent/>):("")}
  <div className='max-w-screen-xl mx-auto '>
    <div className="py-12 bg-white" ref={ref}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {category ? (<CenterHeader heading='Category' subHeading={category}/>):(<CenterHeader heading='News and Updates' subHeading='Latest News and Blogs'/>)} 
        {category ? (<NewsBlogs newsBlogs={categoryBlogs} isVisible={true} />):(<NewsBlogs newsBlogs={newsBlogs} isVisible={true} />)}
      </div>
    </div>
    </div>
</div>
  );
}

export default Blogs;
