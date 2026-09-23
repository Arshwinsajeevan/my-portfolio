import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaAward } from 'react-icons/fa';
import { educationData, certificationsData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-[var(--bg-color)] border-t border-[var(--border-color)] relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-dim)] text-[var(--accent-color)] text-xs font-mono font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]"></span>
            Academic & Credentials
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[var(--text-color)] tracking-tight">
            EDUCATION & CERTIFICATIONS
          </h2>
          <p className="text-base text-[var(--text-muted)] mt-2 max-w-2xl">
            Formal university degrees in Computer Science and certified industry specializations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Degrees (Academic) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--text-muted-light)] font-semibold mb-2">
              <FaGraduationCap size={15} className="text-[var(--accent-color)]" />
              <span>Academic Degrees</span>
            </div>

            {educationData.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-[var(--accent-color)] font-semibold">
                    {edu.period}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-[var(--bg-color)] border border-[var(--border-color)] text-xs font-mono font-semibold text-[var(--text-color)]">
                    Score: {edu.score}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-heading font-bold text-[var(--text-color)]">
                  {edu.degree}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
                  {edu.institution}
                </p>

                <p className="text-xs text-[var(--text-muted)] mt-3 leading-relaxed border-t border-[var(--border-color-light)] pt-3">
                  {edu.details}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Certifications (Industry) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--text-muted-light)] font-semibold mb-2">
              <FaCertificate size={14} className="text-[var(--accent-color)]" />
              <span>Professional Certifications</span>
            </div>

            {certificationsData.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-[var(--accent-color)] font-semibold">
                      {cert.issuer}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  </div>

                  <h3 className="text-base sm:text-lg font-heading font-bold text-[var(--text-color)]">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-[var(--text-muted)] mt-2.5 leading-relaxed">
                    {cert.focus}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
