import { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import CleaningPlans from "../components/CleaningPlans";
import Trust from "../components/Trust";
import Contact from "../components/Contact";

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <CleaningPlans />
      <Trust />
      <Contact />
    </>
  );
}
