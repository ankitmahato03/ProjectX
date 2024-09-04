import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import itemsData from "../data/ourExpertise.json";

const OurExpertise = () => {
  return (
    <div
      id="Expertise"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 py-5 px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col justify-center items-center max-w-xl mb-6 text-center">
        <h3 className="text-neutral-950 dark:text-neutral-100 font-bold text-3xl sm:text-4xl mb-4">
          Our Expertise
        </h3>
        <p className="text-neutral-800 dark:text-neutral-300 text-sm sm:text-base">
          Building a next-generation collaborative platform to connect renters,
          homeowners, and agents.
        </p>
      </div>
      <BentoGrid className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
        {itemsData.items.map((item, index) => (
          <BentoGridItem
            key={index}
            title={item.title}
            description={item.description}
            png={item.png}
            className="bg-[#F6EACB] hover:bg-[#F1D3CE] dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6"
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default OurExpertise;
