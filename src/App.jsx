import Hero from "./components/Hero";
import OurExpertise from "./components/OurExpertise";
import OurTeam from "./components/OurTeam";
import OurProject from "./components/OurProject";
import ClientReview from "./components/ClientReview";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Workflow from "./components/Workflow";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OurExpertise />
      <OurProject />
      <ClientReview />
      <Workflow />
      <OurTeam />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
