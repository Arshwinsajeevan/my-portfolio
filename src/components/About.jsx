import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaArrowRight } from 'react-icons/fa';
import { careerTimeline, personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[var(--bg-color)] border-t border-[var(--border-color)] relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-light">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-dim)] text-[var(--accent-color)] text-xs font-mono font-medium mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]"></span>
              Background
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[var(--text-color)] tracking-tight">
              ABOUT ME
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-color)] font-normal leading-relaxed pt-1">
              I'm <strong className="font-semibold">{personalInfo.name}</strong>, a Software Developer focused on building reliable, real-world web applications across frontend, backend, APIs, databases, and deployment.
            </p>

            <p>
              Holding an MCA (Master of Computer Applications) with 76%, my experience spans designing responsive Next.js and React user interfaces, architecting FastAPI and Django REST backends, and configuring AWS EC2 Linux environments with Nginx and PM2.
            </p>

            <div className="pt-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] text-xs font-mono text-[var(--text-color)] transition-all"
              >
                <span>Read Full Biography & Journey</span>
                <FaArrowRight size={10} />
              </Link>
            </div>
          </div>

          {/* Timeline Teaser Column */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)]">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-sm font-heading font-bold text-[var(--text-color)] uppercase tracking-wider">
                Career Track
              </h3>
              <Link to="/about" className="text-xs font-mono text-[var(--accent-color)] hover:underline flex items-center gap-1">
                <span>All Milestones</span>
                <FaArrowRight size={9} />
              </Link>
            </div>

            <div className="relative border-l border-[var(--border-color-light)] ml-2.5 space-y-4">
              {careerTimeline.slice(0, 3).map((item, idx) => (
                <div key={idx} className="relative pl-5">
                  <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[var(--accent-color)] ring-3 ring-[var(--card-bg)]" />

                  <span className="text-[10px] font-mono text-[var(--accent-color)] font-semibold block">
                    {item.year}
                  </span>

                  <h4 className="text-xs font-semibold text-[var(--text-color)] mt-0.5">
                    {item.title}
                  </h4>

                  <span className="text-[11px] text-[var(--text-muted)] block">
                    {item.org}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
