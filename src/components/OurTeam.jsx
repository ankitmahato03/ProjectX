import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import itemsData from "../data/ourTeam.json";

const OurTeam = () => {

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
      <HoverEffect items={itemsData.ourTeams} />
    </div>
  );
};

export default OurTeam;
