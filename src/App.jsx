import { FloatingNav } from "./components/ui/floating-navbar";
import Hero from "./components/Hero";
import OurExpertise from "./components/OurExpertise";
import PromoCard from "./components/PromoCard";
import OurTeam from "./components/OurTeam";
import OurProject from "./components/OurProject";
import ClientReview from "./components/ClientReview";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  // const navItems = [
  //   {
  //     name: "Expertise",
  //     link: "#",
  //   },
  //   {
  //     name: "Team",
  //     link: "#",
  //   },
  //   {
  //     name: "Projects",
  //     link: "#",
  //   },
  //   {
  //     name: "About Us",
  //     link: "#",
  //   },
  // ];
  return (
    <>
      <Navbar />
      <Hero />
      <PromoCard />
      <OurExpertise />
      <OurTeam />
      <OurProject />
      <ClientReview />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
