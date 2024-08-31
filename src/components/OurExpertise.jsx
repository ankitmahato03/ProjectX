import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import itemsData from "../data/ourExpertise.json";


const OurExpertise = () => {
  return (
    <div
      id="Expertise"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 py-5"
    >
      <div className="flex flex-col justify-center items-center max-w-xl mb-6 px-4">
        <h3 className="text-neutral-950 dark:text-neutral-100 font-bold text-4xl mb-4">
          Our Expertise
        </h3>
        <p className="text-center text-neutral-800 dark:text-neutral-300">
          Building a next-generation collaborative platform to connect renters,
          homeowners, and agents.
        </p>
      </div>
      <BentoGrid className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {itemsData.items.map((item, index) => (
          <BentoGridItem
            key={index}
            title={item.title}
            description={item.description}
            png={item.png}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4"
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default OurExpertise;
