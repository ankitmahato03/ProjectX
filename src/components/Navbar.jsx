import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const navItems = [
  { name: "Expertise", link: "Expertise" },
  { name: "Team", link: "Team" },
  { name: "Projects", link: "Projects" },
  { name: "Client Review", link: "ClientReview" },
  { name: "Contact Us", link: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 20) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-[1200px] bg-white bg-opacity-60 backdrop-blur-lg text-black transition-all duration-300 z-[50] ${
        shadow ? "shadow-lg" : ""
      } px-5 py-3 rounded-[20px]`} // Ensuring the Navbar is centered and not clipped
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="Home" duration={500} smooth={true}>
          <h1 className="text-2xl font-bold cursor-pointer">
            Steiner.<span className="text-teal-400">io</span>
          </h1>
        </Link>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              smooth={true}
              duration={500}
              className="hover:text-teal-400 transition-colors duration-300 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      <div
        className={`fixed min-h-screen top-0 right-0 w-3/4 bg-gray-900 text-white md:hidden transform z-[99] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out rounded-l-[20px]`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl focus:outline-none"
          >
            <FaTimes />
          </button>
        </div>
        <div className="flex flex-col items-center mt-10 space-y-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="text-lg hover:text-teal-400 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
