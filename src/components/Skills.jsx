import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';
import { FaLaptopCode, FaServer, FaDatabase, FaCloud, FaTools, FaCogs, FaArrowRight } from 'react-icons/fa';

const Skills = () => {
  const categoryIcons = [
    <FaLaptopCode size={15} />,
    <FaServer size={15} />,
    <FaDatabase size={15} />,
    <FaCloud size={15} />,
    <FaTools size={15} />,
    <FaCogs size={15} />,
  ];

  return (
    <section id="skills" className="py-20 bg-[var(--bg-color)] relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-dim)] text-[var(--accent-color)] text-xs font-mono font-medium mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]"></span>
              Core Tooling
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[var(--text-color)] tracking-tight">
              SKILLS & CAPABILITIES
            </h2>
            <p className="text-sm text-[var(--text-muted)] mt-1.5 max-w-xl">
              Languages, frameworks, databases, and deployment tooling used across production applications.
            </p>
          </div>

          <Link
            to="/skills"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] text-xs font-mono text-[var(--text-color)] transition-all shrink-0 w-fit"
          >
            <span>Explore All Skills</span>
            <FaArrowRight size={10} />
          </Link>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-[var(--border-color-light)]">
                  <span className="p-1.5 rounded-lg bg-[var(--bg-color)] border border-[var(--border-color-light)] text-[var(--accent-color)]">
                    {categoryIcons[index]}
                  </span>
                  <div>
                    <h3 className="text-sm font-heading font-bold text-[var(--text-color)] uppercase tracking-wider">
                      {cat.category}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-[var(--bg-color)] border border-[var(--border-color-light)] text-[var(--text-color)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
