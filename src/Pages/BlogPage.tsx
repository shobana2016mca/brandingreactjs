import { Router, useParams } from "react-router-dom";
import { newsBlogs } from "../../Constants";
import { FaLocationArrow } from "react-icons/fa6";
import RecentPosts from "../Components/GlobalComponents/RecentPosts";
import { useEffect, useState } from "react";


function BlogPage() {
    const { id } = useParams();
    const [currentId, setCurrentId] = useState(id);
    const blog = newsBlogs.filter((e) => e.id.toString() == id);
    console.log(blog);
    console.log(blog[0].image);

    useEffect(() => {
        if (id !== currentId) {
            setCurrentId(id);
            window.location.reload();
            window.scrollTo(0, 0); 

        }
    }, [id, currentId]);
    

    return (
        <div className="w-full ">
            <div className="max-w-screen-xl mx-auto ">
                <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                    <main className="w-full md:col-span-2">
                        <article className="p-6 bg-white ">
                            <img
                                src={`/${blog[0].image}`}
                                alt="SEO"
                                className="object-cover w-full md:h-96"
                            />
                            <h1 className="mt-4 text-3xl font-bold text-gray-800 md:text-2xl">
                                {blog[0].title}
                            </h1>
                            <div className="mt-2 text-gray-600">
                                <span>{blog[0].author}</span> <span className="ml-2">    </span> <span>{blog[0].date}</span>
                            </div>
                            <p className="mt-4 text-gray-700">
                                {blog[0].content}
                            </p>
                        </article>
                    </main>
                    <aside className="w-full md:col-span-1">
                        <div className="p-6 bg-white shadow-md">
                            <div className="pt-2 border-t-2 border-black ">
                            <h2 className="mb-4 text-xl font-bold text-gray-800">Subscribe To Our Newsletter</h2>
                            <form className="flex">
                                <input type="email" placeholder="Enter Email" className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none " />
                                <button type="submit" className="px-4 py-2 text-white bg-orange-500 ">
                                    <span role="img" aria-label="send"><FaLocationArrow className='text-white ' /></span>
                                </button>
                            </form>

                            </div>

                            <RecentPosts />
                           
                        </div>
                    </aside>
                </div>
            </div>

        </div>
    );
}

export default BlogPage;