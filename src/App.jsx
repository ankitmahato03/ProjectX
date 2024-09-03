import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { lazy } from "react";
const OurTeam = lazy(() => import('./components/OurTeam'));
const OurExpertise = lazy(() => import('./components/OurExpertise'));
const OurProject = lazy(() => import('./components/OurProject'));
const ClientReview = lazy(() => import('./components/ClientReview'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Workflow = lazy(() => import('./components/Workflow'));


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
