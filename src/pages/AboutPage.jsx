import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaCertificate, FaArrowRight, FaCode, FaCheckCircle, FaFileDownload } from 'react-icons/fa';
import { personalInfo, careerTimeline, educationData, certificationsData, engineeringPrinciples } from '../data/portfolioData';

const AboutPage = () => {
  return (
    <div className="pt-28 pb-24 bg-[var(--bg-color)]">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        {/* Header Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/"
            className="text-xs font-mono text-[var(--accent-color)] hover:underline inline-flex items-center gap-1.5 mb-3"
          >
            <span>← Back to Overview</span>
          </Link>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-[var(--text-color)] tracking-tight">
            ABOUT ME
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-muted)] mt-2 font-light">
            Software Developer building full-stack products from interface to production.
          </p>
        </div>

        {/* Narrative & Bio */}
        <div className="space-y-6 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-light border-y border-[var(--border-color)] py-8 sm:py-10">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-[var(--text-color)]">
            Who I Am
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-color)] font-normal leading-relaxed">
            I'm <strong className="font-semibold">{personalInfo.name}</strong>, a Software Developer based in {personalInfo.location}, focused on building dependable, real-world web applications across frontend, backend, APIs, databases, and deployment environments.
          </p>

          <p>
            My engineering foundation is built on an MCA (Master of Computer Applications) from Chinmaya Institute of Technology and a Bachelor’s in Computer Science from Mahatma Gandhi College. Across both academic programs, I focused extensively on systems architecture, data structures, algorithms, and distributed database design.
          </p>

          <p>
            Professionally, I operate as an end-to-end full-stack developer. In my current role at NeoMegaOne LLP, I contribute to high-impact products including <strong className="text-[var(--text-color)] font-medium">Infracapitalist</strong>, an infrastructure platform where I added 100+ infrastructure projects and optimized API loading times from ~500 ms to ~100 ms. I have managed AWS EC2 instances, configured Linux server reverse proxies with Nginx, and ensured zero-downtime execution with PM2.
          </p>

          <p>
            Previously, at VIndia Infrasec in Bengaluru, I developed responsive customer relationship management (CRM) modules and REST APIs using React and Django, managing MySQL schemas and operating within Agile development sprints.
          </p>

          <p>
            While I actively integrate machine learning models and intelligent tools (such as CNN image classification in CropCare and LLM-assisted workflows in AI Live Chat), my primary identity and daily dedication remain squarely focused on <strong className="text-[var(--text-color)] font-medium">Software Development</strong>: designing reliable architectures, ensuring snappy user interfaces, and shipping solid code to production.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={personalInfo.resumeUrl}
              download="Arshwin_Sajeevan_Resume.pdf"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[var(--text-color)] text-[var(--bg-color)] font-mono text-xs font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <FaFileDownload size={12} />
              <span>Download Resume</span>
            </a>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-color)] hover:border-[var(--accent-color)] transition-all flex items-center justify-center gap-2"
            >
              <span>Get in Touch</span>
              <FaArrowRight size={10} />
            </Link>
          </div>
        </div>

        {/* Career Timeline */}
        <div className="py-10 sm:py-12 border-b border-[var(--border-color)]">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-[var(--text-color)] mb-6 sm:mb-8">
            Career & Education Journey
          </h2>

          <div className="relative border-l-2 border-[var(--border-color)] ml-2 sm:ml-3 space-y-8 sm:space-y-10">
            {careerTimeline.map((item, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8">
                <span className="absolute -left-[7px] sm:-left-[9px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[var(--accent-color)] ring-4 ring-[var(--bg-color)]" />
                <span className="text-xs font-mono text-[var(--accent-color)] font-semibold">
                  {item.year}
                </span>
                <h3 className="text-lg font-heading font-bold text-[var(--text-color)] mt-0.5">
                  {item.title}
                </h3>
                <span className="text-xs font-mono text-[var(--text-muted)] block">
                  {item.org}
                </span>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2 leading-relaxed max-w-2xl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications Side-by-Side */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-[var(--border-color)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--text-muted-light)] font-semibold mb-4">
              <FaGraduationCap size={15} className="text-[var(--accent-color)]" />
              <span>Academic Qualifications</span>
            </div>

            <div className="space-y-4">
              {educationData.map((edu) => (
                <div key={edu.degree} className="p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)]">
                  <span className="text-xs font-mono text-[var(--accent-color)] font-semibold">{edu.period}</span>
                  <h3 className="text-base font-bold text-[var(--text-color)] mt-1">{edu.degree}</h3>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">{edu.institution}</p>
                  <p className="text-xs font-mono text-[var(--text-color)] mt-2 font-medium">Score: {edu.score}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--text-muted-light)] font-semibold mb-4">
              <FaCertificate size={14} className="text-[var(--accent-color)]" />
              <span>Industry Certifications</span>
            </div>

            <div className="space-y-4">
              {certificationsData.map((cert) => (
                <div key={cert.title} className="p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)]">
                  <span className="text-xs font-mono text-[var(--accent-color)] font-semibold">{cert.issuer}</span>
                  <h3 className="text-base font-bold text-[var(--text-color)] mt-1">{cert.title}</h3>
                  <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">{cert.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Engineering Philosophy */}
        <div className="pt-12">
          <h2 className="text-2xl font-heading font-bold text-[var(--text-color)] mb-6">
            Engineering Philosophy
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {engineeringPrinciples.map((principle) => (
              <div key={principle.title} className="p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)]">
                <h3 className="text-sm font-bold text-[var(--text-color)] mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
                  {principle.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed pl-3.5">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
