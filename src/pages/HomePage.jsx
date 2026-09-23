import React from 'react';
import Hero from '../components/Hero';
import StatsBanner from '../components/StatsBanner';
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

      {/* 2. Quick metrics / technical snapshot */}
      <StatsBanner />

      {/* 3. Selected Professional Work (Infracapitalist flagship + company products) */}
      <FeaturedWork />

      {/* 4. Experience (NeoMegaOne & VIndia) */}
      <Experience />

      {/* 5. From Code to Production (Pipeline visualizer) */}
      <CodeToProduction />

      {/* 6. Skills (Categorized technical chips) */}
      <Skills />

      {/* 7. Engineering Approach */}
      <EngineeringApproach />

      {/* 8. Personal Projects (CropCare, AI Live Chat, Rustique, etc.) */}
      <Projects />

      {/* 9. About */}
      <About />

      {/* 10. Education & Certifications */}
      <Education />

      {/* 11. Contact */}
      <Contact />
    </main>
  );
};

export default HomePage;
