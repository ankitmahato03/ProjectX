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
