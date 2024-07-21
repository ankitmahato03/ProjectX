import React from "react";
import { FloatingNav } from "./components/ui/floating-navbar";
import Hero from "./components/Hero";
import OurExpertise from "./components/OurExpertise";
import PromoCard from "./components/PromoCard";

const App = () => {
  const navItems = [
    {
      name: "Expertise",
      link: "#",
    },
    {
      name: "Team",
      link: "#",
    },
    {
      name: "Projects",
      link: "#",
    },
    {
      name: "About Us",
      link: "#",
    },
  ];
  return (
    <>
      <FloatingNav navItems={navItems} />
      <Hero />
      <PromoCard />
      <OurExpertise />
    </>
  );
};

export default App;
