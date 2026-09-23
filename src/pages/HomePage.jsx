import React from 'react';
import Hero from '../components/Hero';
import FeaturedWork from '../components/FeaturedWork';
import Experience from '../components/Experience';
import CodeToProduction from '../components/CodeToProduction';
import Skills from '../components/Skills';
import EngineeringApproach from '../components/EngineeringApproach';
import Projects from '../components/Projects';
import About from '../components/About';
import Education from '../components/Education';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <main>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Selected Professional Work (Infracapitalist flagship + company products) */}
      <FeaturedWork />

      {/* 4. Experience (NeoMegaOne & VIndia) */}
      <Experience />

      {/* 5. From Code to Production (Pipeline visualizer) */}
      <CodeToProduction />

      {/* 5. Skills (Categorized technical chips) */}
      <Skills />

      {/* 6. Personal Projects (Independent Builds: CropCare, AI Live Chat, Rustique, etc.) */}
      <Projects />

      {/* 7. Engineering Approach */}
      <EngineeringApproach />

      {/* 8. About */}
      <About />

      {/* 9. Education & Certifications */}
      <Education />

      {/* 10. Contact */}
      <Contact />
    </main>
  );
};

export default HomePage;
