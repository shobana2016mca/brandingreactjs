import React from "react";
import { Link, useLocation } from "react-router-dom";

interface IBreadCrumbComponentProps {}

interface BreadCrumbs {
  title: string;
  image: string;
  description: string;
}

export const BreadCrumbsList: BreadCrumbs[] = [
  {
    title: "About Us",
    image: "/About-bg-img.png.png",
    description:
      "Ensuring the best return on investment for your bespoke SEO campaign requirement.",
  },
   {
    title: "Contact Us",
    image: "/contact-bg-img.jpg",
    description:
      "Ensuring the best return on investment for your bespoke SEO campaign requirement.",
  },
  {
    title: "Services",
    image: "/services-img.png",
    description:
      "Ensuring the best return on investment for your bespoke SEO campaign requirement.",
  },
];

const BreadCrumbComponent: React.FunctionComponent<
  IBreadCrumbComponentProps
> = () => {
  const { pathname } = useLocation();

  // Splitting the pathname into segments and filtering out empty segments
  const segments = pathname.split("/").filter((segment) => segment !== "");

  // Function to format each segment for display
  const formatPathnameSegment = (segment: string) => {
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Find breadcrumb data based on formatted segment title
  const data = BreadCrumbsList.find(
    (e) =>
      e.title.toLowerCase() ===
      formatPathnameSegment(segments[segments.length - 1]).toLowerCase()
  );

  return (
    <>
      <div className="bg-[#19191F] flex flex-col items-center justify-center w-full">
        <div className="grid max-w-screen-xl mx-auto grid-col-1 md:grid-cols-2">
          <section className="flex flex-col justify-center m-4 lg:ml-36">
           
              {data && (
              <div className="mt-4">
                <h2 className="mt-4 text-3xl font-bold text-white md:text-7xl">{data.title}</h2>
                <p className="mb-4 text-lg leading-7 text-gray-400">{data.description}</p>
              </div>
            )}
            
            <div className="flex items-center w-48 h-16 p-5 space-x-2 text-white capitalize border-2 border-orange-600">
              <Link to="/" className="text-sm">
                <span className="text-sm">Home</span>
              </Link>

              <span>~</span>
              {segments.map((segment, index) => (
                <div key={index}>
                  <Link to={`/${segment}`} className="text-sm">
                    <span className="text-sm">
                      {formatPathnameSegment(segment)}
                    </span>
                  </Link>
                  {index < segments.length - 1 && <span>~</span>}
                </div>
              ))}
            </div>

          </section>
          <section className="max-w-[490px] w-full p-3 mt-8 mx-auto">
            {data && (
              <img
                src={data.image}
                className="object-contain h-auto max-w-full"
                alt="Placeholder"
              />
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default BreadCrumbComponent;
