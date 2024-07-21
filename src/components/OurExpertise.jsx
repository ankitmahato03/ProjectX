import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const items = [
  {
    title: "Consulting",
    description: "Get the right technology solutions for your business. Our expert consultants provide tailored advice and optimized results.",
    png: "/pngs/consulting-png.png",
  },
  {
    title: "Project Management",
    description: "Transform your project with our project management services. Expert solutions for efficient delivery and optimized results.",
    png: "/pngs/project-management.png",
  },
  {
    title: "Sonftware Engineering",
    description: "Build software that solves your biggest business challenges. Our expert engineers will craft tailored solutions to help you succeed.",
    png: "/pngs/software-engineering.png",
  },
];

const OurExpertise = () => {
  return (
    <div
      id="ourExpertise"
      className="h-screen w-full flex flex-col items-center justify-center bg-gray-50"
    >
      <div className="flex flex-col justify-center items-center max-w-xl mb-6">
        <h3 className="from-neutral-950 font-bold text-4xl mb-4">
          Our Expertise
        </h3>
        <p className="text-center">
          Building a next-generation collaborative platform to connect renters,
          homeowners, and agents.
        </p>
      </div>
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            png={item.png}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default OurExpertise;
