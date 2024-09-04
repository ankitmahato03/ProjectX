import Hero from "./components/Hero";
import { lazy, Suspense } from "react";
const OurExpertise = lazy(() => import('./components/OurExpertise'));
const OurProject = lazy(() => import('./components/OurProject'));
const ClientReview = lazy(() => import('./components/ClientReview'));
const Contact = lazy(() => import('./components/Contact'));
const Workflow = lazy(() => import('./components/Workflow'));
const OurTeam = lazy(() => import('./components/OurTeam'))
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Suspense fallback={<div>Loading...</div>}>
        <OurExpertise />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <OurProject />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ClientReview />
      </Suspense>
      <Suspense fallback={<div className="">Loading...</div>}>
        <Workflow />
      </Suspense>
      <Suspense fallback={<div className="">Loading...</div>}>
        <OurTeam />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
