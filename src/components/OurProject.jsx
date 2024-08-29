import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const data = [
  {
    title: "Erlebniswelt Roggen Erschmatt",
    description:
      "Transform your projects with our project management services. Expert solutions for efficient delivery and optimized results.",
    image: "https://images.pexels.com/photos/2341112/pexels-photo-2341112.jpeg",
  },
  {
    title: "Leuk Tourismus",
    description:
      "Get the right technology solutions for your business. Our Expert consultants provide tailored advice and optimized results.",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
  },
  {
    title: "SPOTZ",
    description:
      "Get the right technology solutions for your business. Our Expert consultants provide tailored advice and optimized results.",
    image: "https://images.pexels.com/photos/8516356/pexels-photo-8516356.jpeg",
  },
  {
    title: "Leuk Tourismus",
    description:
      "Get the right technology solutions for your business. Our Expert consultants provide tailored advice and optimized results.",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
  },
];

const OurProject = () => {
  return (
    <div
      id="Projects"
      className="h-full flex flex-col items-center bg-slate-100 dark:bg-neutral-900 pb-6"
    >
      <div className="text-neutral-900 dark:text-neutral-100 flex flex-col justify-center items-center max-w-xl mt-8 mb-6">
        <h3 className="font-bold text-3xl sm:text-4xl">Projects</h3>
        <p className="text-center text-neutral-700 dark:text-neutral-300 py-2">
          Building a next-generation collaborative platform to connect renters,
          homeowners, and agents.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6">
        {data.map((item, index) => (
          <CardContainer className="inter-var" key={index}>
            <CardBody className="bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 border-gray-200 w-full sm:w-[20rem] mx-auto h-full rounded-xl p-6 border shadow-md dark:shadow-none hover:shadow-lg transition-shadow">
              <CardItem translateZ="100" className="w-full mb-4 flex">
                <img
                  src={item.image}
                  className="h-40 w-full object-cover rounded-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-lg font-bold text-neutral-700 dark:text-neutral-100"
              >
                {item.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-600 dark:text-neutral-300 text-sm mt-2"
              >
                {item.description}
              </CardItem>

              <div className="flex justify-between items-center mt-4">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Learn More
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default OurProject;
