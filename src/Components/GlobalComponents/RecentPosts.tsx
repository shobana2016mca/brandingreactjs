import { Link } from "react-router-dom";
import { newsBlogs } from "../../../Constants";
import * as React from 'react';
import { FaClock } from "react-icons/fa";
import { category } from "../../../Constants";
import { SlArrowRight } from "react-icons/sl";


interface IRecentPostsProps {
}

const RecentPosts: React.FunctionComponent<IRecentPostsProps> = () => {


    const recentPosts = newsBlogs.slice(0, 3);
    console.log(recentPosts);

  return (<>
     <div className="p-2 mt-6 border-t-2 border-black ">
              <h3 className="mb-2 text-lg font-bold text-gray-800">Recent Posts</h3>
              <ul className="space-y-4">
                {recentPosts.map((e,index)=>(<>
                <li key={index}>
                
                  <Link to={`/blog/${e.id}/${e.title}`} className="flex items-center text-gray-800 ">
                    <img 
                      src={`/${e.image}`}
                      alt="Post 1"
                      className="object-cover w-16 h-16 mr-4"
                    />
                    <div className="">
                        <h3 className="text-sm"> {e.title}</h3>
                        <div className="text-sm text-orange-600"> {<FaClock className="inline-block mr-1 "/>} {e.date}</div>
                    </div>
                    
                  </Link>
                </li>

                </>))}
               
              </ul>
            </div>
             <div className="p-3 mt-6 border-t-2 border-black ">
                                <h3 className="mb-2 text-lg font-bold text-gray-800">Category</h3>
                                <ul className="space-y-2">
                                    {category.map((e,index)=>(<li key={index}> <SlArrowRight className="inline-block mr-1 " />

                                        <Link to={`/blogs/${e}`} className="text-gray-800 hover:text-orange-600 ">{e}</Link>
                                    </li>))}
                                </ul>
            </div>
  </>) ;
};

export default RecentPosts;
