import React from "react";
import laptopImage from "/laptop-img.jpg";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const PromoCard = () => {
  return (
    <div className="bg-gradient-to-br from-gray-400 via-gray-100 to-gray-400 text-white flex justify-center items-center h-screen">
      <div className="max-w-4xl h-3/4 p-4 md:p-6 bg-gray-500 rounded-lg shadow-lg flex flex-col md:flex-row">
        <img
          src={laptopImage} // replace with your image source
          alt="Laptop"
          className="rounded-lg md:w-[40%] w-3/4 mx-auto md:mr-4"
        />
        <div className="flex flex-col justify-center w-full md:w-[60%] mt-4 md:mt-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
            we can help you drive innovation in your business
          </h2>
          <p className="mb-6 text-justify">
            We pride ourselves on our commitment to quality, and we work
            tirelessly to ensure that every project we undertake is completed to
            the highest standards. Our approach is collaborative and
            customer-focused.
          </p>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 py-2 px-4"
          >
            <span>Contact Us</span>
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;

// const PromoCard = () => {
//   return (
//     <div className="h-screen w-full flex justify-center items-center">
//       <div className="grid grid-cols-2 px-5 h-40">
//         <div className="h-full overflow-hidden flex justify-center items-center">
//           <img
//             src={laptopImage}
//             alt="innovation"
//             className="h-32 overflow-hidden"
//           />
//         </div>
//         <div className="flex flex-col justify-center items-center">
//           <h4>we can help you drive innovation in your bussiness</h4>
//           {/* */}
//           <p>
//             We pride ourselves on our commitment to quality, and we work
//             tirelessly to ensure that every project we undertake is completed to
//             the highest standards. Our approach is collaborative and
//             customer-focused.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
