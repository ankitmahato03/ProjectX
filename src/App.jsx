import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { lazy, Suspense } from "react";
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
      <Suspense fallback={<div>Loading...</div>}>
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
