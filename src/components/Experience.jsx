import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[var(--bg-color)] relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-dim)] text-[var(--accent-color)] text-xs font-mono font-medium mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]"></span>
              Career Path
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[var(--text-color)] tracking-tight">
              EXPERIENCE
            </h2>
            <p className="text-sm text-[var(--text-muted)] mt-1.5 max-w-xl">
              Software engineering internships across production platforms, full-stack systems, and cloud deployments.
            </p>
          </div>

          <Link
            to="/experience"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] text-xs font-mono text-[var(--text-color)] transition-all shrink-0 w-fit"
          >
            <span>View Full Career Track</span>
            <FaArrowRight size={10} />
          </Link>
        </div>

        {/* Compressed Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[var(--border-color-light)]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-color)] font-semibold uppercase tracking-wider">
                    <FaBuilding size={11} />
                    <span>{exp.company}</span>
                  </div>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-bold text-[var(--text-color)] mt-4">
                  {exp.role}
                </h3>
                <span className="text-xs font-mono text-[var(--text-muted)] block mt-0.5">
                  {exp.type}
                </span>

                <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-3 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Brief highlights preview */}
                <div className="mt-4 pt-4 border-t border-[var(--border-color-light)]">
                  <span className="text-[11px] font-mono uppercase text-[var(--text-muted-light)] font-semibold block mb-2">
                    Key Work:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-color)] border border-[var(--border-color-light)] text-[var(--text-muted)]"
                      >
                        {h.product}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-[var(--border-color-light)] flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {exp.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-[var(--bg-color)] text-[var(--text-muted)] border border-[var(--border-color-light)]"
                    >
                      {tech}
                    </span>
                  ))}
                  {exp.technologies.length > 4 && (
                    <span className="text-[10px] font-mono text-[var(--text-muted-light)] self-center pl-1">
                      +{exp.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <Link
                  to="/experience"
                  className="text-xs font-mono text-[var(--accent-color)] hover:underline inline-flex items-center gap-1 shrink-0"
                >
                  <span>Details</span>
                  <FaArrowRight size={9} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
