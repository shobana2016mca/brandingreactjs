// src/Components/GlobalComponents/BreadCrumbComponent.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import useIntract from "../GlobalComponents/useIntract";

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
    title: "Enquire",
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
  {
    title: "Blogs",
    image: "No",
    description:
      "Ensuring the best return on investment for your bespoke SEO campaign requirement.",
  },
  {
    title: "Companies",
    image: "No",
    description: "Trusted by Over 30000+ Companies",
  },
];

const BreadCrumbComponent: React.FunctionComponent<
  IBreadCrumbComponentProps
> = () => {
  const { pathname } = useLocation();
  const { ref, isVisible } = useIntract();

  const segments = pathname.split("/").filter((segment) => segment !== "");

  const formatPathnameSegment = (segment: string) => {
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const data = BreadCrumbsList.find(
    (e) =>
      e.title.toLowerCase() ===
      formatPathnameSegment(segments[segments.length - 1]).toLowerCase()
  );

  return (
    <div
      className="bg-[#19191F] flex flex-col lg:h-[420px] items-center justify-center w-full"
      ref={ref}
    >
      <div
        className={`grid max-w-screen-xl mx-auto ${data?.image === "No" ? " flex items-center justify-center min-h-[400px]" : "grid-col-1 md:grid-cols-2"} `}
      >
        <section
          className={`flex flex-col justify-center ${data?.image === "No" ? " items-center gap-4" : "lg:ml-36 "} m-4  ${isVisible ? "animate-fadeUp" : ""}`}
        >
          {data && (
            <div
              className={`mt-4 ${data?.image === "No" ? "text-center" : ""} `}
            >
              <h2 className="mt-4 text-3xl font-bold text-white md:text-7xl ">
                {data.title}
              </h2>
              <p className="mt-4 mb-4 text-lg leading-7 text-gray-400">
                {data.description}
              </p>
            </div>
          )}
          <div className="flex items-center justify-center h-16 p-5 space-x-2 text-white capitalize border-2 border-orange-600 min-w-48">
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
        <section
          className={`max-w-[490px] min-h-[340px] w-full p-3 mt-8 mx-auto ${data?.image === "No" ? "hidden" : "block"} ${isVisible ? "animate-fadeUp" : ""}`}
        >
          {data && (
            <img
              loading="lazy"
              src={data.image}
              className="object-contain h-auto max-w-full animate-fadeUp"
              alt={data.title}
            />
          )}
        </section>
      </div>
    </div>
  );
};

export default BreadCrumbComponent;