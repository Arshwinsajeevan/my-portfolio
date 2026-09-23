import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin, FaFileDownload, FaServer, FaDatabase, FaCloud, FaLaptopCode } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const pipelineFlow = [
    { label: 'Frontend', tech: 'React / Next.js', icon: <FaLaptopCode size={14} /> },
    { label: 'API Layer', tech: 'FastAPI / REST', icon: <FaServer size={14} /> },
    { label: 'Database', tech: 'PostgreSQL', icon: <FaDatabase size={14} /> },
    { label: 'Cloud Compute', tech: 'AWS EC2', icon: <FaCloud size={14} /> },
  ];

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Subtle technical background grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[650px] h-[350px] bg-[var(--glow-color)] blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
        <div className="flex flex-col items-center text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-[11px] sm:text-xs font-mono text-[var(--text-muted)] max-w-full"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4"></span>
            <span className="text-[var(--text-color)] font-medium">Software Developer</span>
            <span className="text-[var(--text-muted-light)]">/</span>
            <span>Available for Full-Time Roles</span>
          </motion.div>

          {/* Name & Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 max-w-4xl"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-[var(--text-color)] tracking-tight leading-[1.08]">
              {personalInfo.name}
            </h1>

            <p className="text-lg sm:text-2xl md:text-3xl font-light text-[var(--text-muted)] max-w-3xl mx-auto leading-snug">
              Software Developer building full-stack products{' '}
              <span className="text-[var(--text-color)] font-normal">from interface to production</span>.
            </p>

            <p className="text-xs sm:text-base text-[var(--text-muted)] max-w-2xl mx-auto pt-1 sm:pt-2 leading-relaxed">
              {personalInfo.description}
            </p>
          </motion.div>

          {/* Technical Stack Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 text-xs font-mono"
          >
            <span className="text-[var(--text-muted-light)] uppercase tracking-wider text-[10px] sm:text-[11px]">Primary Stack:</span>
            {personalInfo.techStackSummary.map((tech) => (
              <span
                key={tech}
                className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-color)] text-[11px] sm:text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto"
          >
            <Link
              to="/projects"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[var(--text-color)] text-[var(--bg-color)] font-semibold text-xs sm:text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2.5 shadow-md shadow-black/10 group"
            >
              <span>Explore Work</span>
              <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/about"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-color)] font-medium text-xs sm:text-sm hover:border-[var(--accent-color)] hover:bg-[var(--card-hover-bg)] transition-all flex items-center justify-center"
            >
              About Me
            </Link>

            <a
              href={personalInfo.resumeUrl}
              download="Arshwin_Sajeevan_Resume.pdf"
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-color)] hover:border-[var(--accent-color)] transition-all text-xs sm:text-sm font-mono flex items-center justify-center gap-2"
            >
              <FaFileDownload size={13} />
              <span>Resume</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-2 pt-1 sm:pt-0">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-color)] hover:border-[var(--accent-color)] transition-all"
              >
                <FaGithub size={16} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-color)] hover:border-[var(--accent-color)] transition-all"
              >
                <FaLinkedin size={16} />
              </a>
            </div>
          </motion.div>

          {/* Code to Production Flow Micro-Visual */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 sm:mt-16 w-full max-w-3xl"
          >
            <div className="p-3.5 sm:p-5 rounded-2xl bg-[var(--card-bg)]/80 border border-[var(--border-color)] backdrop-blur-sm shadow-sm">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border-color-light)]">
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] truncate">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-color)] shrink-0"></span>
                  <span className="font-semibold text-[var(--text-color)] uppercase tracking-wider">System Pipeline</span>
                  <span className="hidden sm:inline text-[var(--text-muted-light)]">|</span>
                  <span className="hidden sm:inline">End-to-End Architecture</span>
                </div>
                <Link to="/experience" className="text-[11px] font-mono text-[var(--accent-color)] hover:underline flex items-center gap-1 shrink-0 ml-2">
                  <span>View Track</span>
                  <FaArrowRight size={9} />
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                {pipelineFlow.map((step, idx) => (
                  <div
                    key={step.label}
                    className="relative flex flex-col p-2.5 sm:p-3 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color-light)] hover:border-[var(--accent-color)] transition-all text-left group"
                  >
                    <div className="flex items-center justify-between text-[var(--accent-color)] mb-1">
                      <span className="p-1 sm:p-1.5 rounded-lg bg-[var(--card-bg)]">{step.icon}</span>
                      <span className="text-[10px] font-mono text-[var(--text-muted-light)]">0{idx + 1}</span>
                    </div>
                    <span className="text-xs font-semibold text-[var(--text-color)] truncate">{step.label}</span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-[var(--text-muted)] mt-0.5 truncate">{step.tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
