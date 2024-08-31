
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const items = [
  {
    title: "Consulting",
    description:
      "Get the right technology solutions for your business. Our expert consultants provide tailored advice and optimized results.",
    png: "/pngs/consulting-png.png",
  },
  {
    title: "Project Management",
    description:
      "Transform your project with our project management services. Expert solutions for efficient delivery and optimized results.",
    png: "/pngs/project-management.png",
  },
  {
    title: "Software Engineering",
    description:
      "Build software that solves your biggest business challenges. Our expert engineers will craft tailored solutions to help you succeed.",
    png: "/pngs/software-engineering.png",
  },
];

const OurExpertise = () => {
  return (
    <div
      id="Expertise"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 py-5"
    >
      <div className="flex flex-col justify-center items-center max-w-xl mb-6 px-4">
        <h3 className="text-neutral-950 dark:text-neutral-100 font-bold text-3xl sm:text-4xl mb-4 text-center">
          Our Expertise
        </h3>
        <p className="text-center text-neutral-800 dark:text-neutral-300 text-sm sm:text-base">
          Building a next-generation collaborative platform to connect renters,
          homeowners, and agents.
        </p>
      </div>
      <BentoGrid className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            png={item.png}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center text-center"
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default OurExpertise;
