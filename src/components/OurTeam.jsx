import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const OurTeam = () => {
  const ourTeams = [
    {
      title: "Wendelin Steiner",
      description:
        "Wendelin's dedication to customer satisfaction and his extensive knowledge in IT solutions and web development make him an ideal project manager. He's always working to ensure success for both the team and clients.",
      image:
        "https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg",
    },
    {
      title: "Florian Steiner",
      description:
        "Florian is a talented web developer with a passion for creating beautiful and functional websites. He's always looking for new ways to improve his skills and stay up-to-date with the latest technologies.",
      image:
        "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg",
    },
    {
      title: "Frederick Steiner",
      description:
        "Frederick is a creative designer with a keen eye for detail and a passion for creating visually stunning websites. He's always looking for new ways to push the boundaries of design and create unique user experiences.",
      image:
        "https://images.pexels.com/photos/3394657/pexels-photo-3394657.jpeg",
    },
  ];

  return (
    <div
      id="Team"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-neutral-800 py-10 px-4"
    >
      <div className="text-neutral-100 flex flex-col justify-center items-center max-w-xl mb-8 text-center">
        <h3 className="font-bold text-3xl sm:text-4xl mb-4">Our Team</h3>
        <p className="text-neutral-300 text-base sm:text-lg">
          Building a next-generation collaborative platform to connect renters,
          homeowners, and agents.
        </p>
      </div>
      <HoverEffect items={ourTeams} />
    </div>
  );
};

export default OurTeam;
