import React from "react";
import laptopImage from "/laptop-img.jpg";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Link } from "react-scroll";

const PromoCard = () => {
  return (
    <div className="bg-gradient-to-br from-gray-400 via-gray-100 to-gray-400 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 flex justify-center items-center h-full py-5">
      <div className="max-w-4xl w-full p-4 md:p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg flex flex-col md:flex-row">
        <img
          src={laptopImage}
          alt="Laptop"
          className="rounded-lg w-full md:w-[40%] mx-auto md:mx-0 mb-4 md:mb-0 md:mr-4"
        />
        <div className="flex flex-col justify-center w-full md:w-[60%] text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            We can help you drive innovation in your business
          </h2>
          <p className="mb-6">
            We pride ourselves on our commitment to quality, and we work
            tirelessly to ensure that every project we undertake is completed to
            the highest standards. Our approach is collaborative and
            customer-focused.
          </p>
          <Link to="Contact" duration={500} smooth={true}>
            <HoverBorderGradient
              containerClassName="rounded-full mx-auto md:mx-0"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 py-2 px-4"
            >
              <span>Contact Us</span>
            </HoverBorderGradient>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
