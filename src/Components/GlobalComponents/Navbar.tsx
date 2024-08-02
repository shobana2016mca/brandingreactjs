import { useState } from "react";
import { Link } from "react-router-dom";
interface SubMenuItem {
  title: string;
  href: string;
}

interface MenuItem {
  title: string;
  href?: string;
  subMenu?: SubMenuItem[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);

  const menuItems: MenuItem[] = [
    {
      title: "Home",
      href: "/",
    },

    {
      title: "About",
      href: "/about-us",
    },
    {
      title: "Contact",
      href: "/contact-us",
    },
    {
      title: "Services",
      href: "/services",
    },

    // {
    //   title: 'Company',
    //   subMenu: [
    //     { title: 'About Us', href: '#' },
    //     { title: 'Careers', href: '#' },
    //     { title: 'Contact', href: '#' },
    //   ],
    // },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (index: number) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  const handleMouseEnter = (index: number) => {
    if (window.innerWidth >= 1024) {
      setOpenSubMenuIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setOpenSubMenuIndex(null);
    }
  };

  return (
    <header className="relative z-10 mx-auto bg-white shadow max-w-screen-2xl lg:bg-transparent ">
      <div className="w-full py-4 mx-auto bg-white lg:flex lg:justify-between lg:items-center">
        <div className="flex items-center justify-between px-6">
          <Link to="/">
            <img
              className="w-auto h-12 "
              width="auto"
              height="auto"
              loading="lazy"
              src="/BS-logo.png"
              alt="branding Logo"
            />
          </Link>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-1 text-white bg-orange-600 focus:outline-none"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <nav
          className={`fixed inset-0 z-50 transition-transform transform bg-white  lg:bg-transparent lg:relative lg:translate-x-0 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:flex lg:items-center max-lg:mt-2 max-md:bg-white max-lg:w-[70%] px-6 pb-2 pt-2`}
        >
          <div className="lg:flex lg:items-center lg:space-x-6">
            {menuItems.map((menuItem, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {menuItem.subMenu ? (
                  <>
                    <button
                      onClick={() => toggleSubMenu(index)}
                      className="flex items-center h-full px-3 py-2 font-semibold text-black transition-colors duration-300 transform rounded-md lg:mt-0 hover:text-orange-600 focus:outline-none"
                    >
                      {menuItem.title}
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={`${
                            openSubMenuIndex === index
                              ? "M5 15l7-7 7 7"
                              : "M19 9l-7 7-7-7"
                          }`}
                        />
                      </svg>
                    </button>
                    <ul
                      className={`${
                        openSubMenuIndex === index ? "block" : "hidden"
                      } text-white lg:bg-white bg-opacity-75 max-lg:ml-[30px] lg:ml-[12px] lg:absolute top-10 w-40 left-0 z-10 lg:shadow-lg`}
                    >
                      {menuItem.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.href}
                            className="block px-3 py-2 font-semibold text-black transition-colors duration-300 transform hover:max-lg:text-orange-600 hover:lg:text-white lg:hover:bg-orange-600"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    to={menuItem.href || "#"}
                    className="flex items-center h-full px-3 py-2 font-semibold text-black transition-colors duration-300 transform lg:mt-0 hover:text-orange-600"
                  >
                    {menuItem.title}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/enquiry"
              className="p-2 text-white bg-orange-600 max-md:mt-3 max-md:ml-3 "
            >
              Enquiry Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
