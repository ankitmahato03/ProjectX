import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card';

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
    <div className="h-full flex flex-col items-center bg-slate-100 pb-3">
      <div className="text-neutral-900  flex flex-col justify-center items-center max-w-xl mt-6 mb-4">
        <h3 className=" font-bold text-4xl">Projects</h3>
        <p className="text-center py-2">
          Building a next-generation collaborative platform to connect renters,
          homeowners, and agents.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-0">
        {data.map((item) => (
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] mx-3 h-auto rounded-xl p-6 border">
              <CardItem translateZ="100" className="w-full mb-4 flex">
                <img
                  src={item.image}
                  height="1000"
                  width="1000"
                  className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-lg font-bold text-neutral-600 dark:text-white"
              >
                {item.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-xs mt-2 dark:text-neutral-300"
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
}

export default OurProject