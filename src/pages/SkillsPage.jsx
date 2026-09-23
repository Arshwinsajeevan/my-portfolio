import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaLaptopCode, 
  FaServer, 
  FaDatabase, 
  FaCloud, 
  FaTools, 
  FaCogs, 
  FaArrowLeft, 
  FaLayerGroup,
  FaCheck
} from 'react-icons/fa';
import { skillCategories } from '../data/portfolioData';

const SkillsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryMeta = {
    Frontend: {
      icon: <FaLaptopCode size={16} />,
      accent: 'text-sky-500 dark:text-sky-400',
      badge: 'Client & Interface',
    },
    Backend: {
      icon: <FaServer size={16} />,
      accent: 'text-emerald-500 dark:text-emerald-400',
      badge: 'APIs & Services',
    },
    Databases: {
      icon: <FaDatabase size={16} />,
      accent: 'text-amber-500 dark:text-amber-400',
      badge: 'Persistence & Schemas',
    },
    'DevOps / Deployment': {
      icon: <FaCloud size={16} />,
      accent: 'text-indigo-500 dark:text-indigo-400',
      badge: 'Server & Cloud',
    },
    Tools: {
      icon: <FaTools size={16} />,
      accent: 'text-rose-500 dark:text-rose-400',
      badge: 'Environment & Versioning',
    },
    Engineering: {
      icon: <FaCogs size={16} />,
      accent: 'text-cyan-500 dark:text-cyan-400',
      badge: 'Systems & Delivery',
    },
  };

  const filteredCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter((c) => c.category === selectedCategory);

  return (
    <div className="pt-28 pb-24 bg-[var(--bg-color)] min-h-screen relative overflow-hidden">
      {/* Subtle technical background grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        {/* Header Breadcrumb & Title */}
        <div className="mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent-color)] hover:underline mb-4"
          >
            <FaArrowLeft size={10} />
            <span>Back to Overview</span>
          </Link>

          <div className="pb-8 border-b border-[var(--border-color)]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-dim)] text-[var(--accent-color)] text-xs font-mono font-medium mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]"></span>
                Technical Arsenal
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-[var(--text-color)] tracking-tight">
                SKILLS & TOOLING
              </h1>
              <p className="text-sm sm:text-base text-[var(--text-muted)] mt-2 font-light max-w-xl">
                Verified technologies and tools across frontend, backend, databases, cloud servers, and full-stack engineering.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs with Edge-to-Edge Mobile Swipe */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all shrink-0 ${
              selectedCategory === 'All'
                ? 'bg-[var(--text-color)] text-[var(--bg-color)] shadow-sm'
                : 'bg-[var(--card-bg)] text-[var(--text-muted)] hover:text-[var(--text-color)] border border-[var(--border-color)]'
            }`}
          >
            All Disciplines ({skillCategories.length})
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-3 py-2 rounded-xl text-xs font-mono font-medium transition-all shrink-0 flex items-center gap-1.5 ${
                selectedCategory === cat.category
                  ? 'bg-[var(--text-color)] text-[var(--bg-color)] shadow-sm'
                  : 'bg-[var(--card-bg)] text-[var(--text-muted)] hover:text-[var(--text-color)] border border-[var(--border-color)]'
              }`}
            >
              <span>{cat.category}</span>
              <span className={`text-[10px] opacity-70 ${selectedCategory === cat.category ? 'text-[var(--bg-color)]' : 'text-[var(--accent-color)]'}`}>
                {cat.skills.length}
              </span>
            </button>
          ))}
        </div>

        {/* Dynamic Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat, idx) => {
              const meta = categoryMeta[cat.category] || {
                icon: <FaLayerGroup size={16} />,
                accent: 'text-[var(--accent-color)]',
                badge: 'Technology',
              };

              return (
                <motion.div
                  key={cat.category}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="p-5 sm:p-7 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all shadow-xs flex flex-col justify-between group"
                >
                  <div>
                    {/* Header: Icon, Category & Monospace index */}
                    <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[var(--border-color-light)]">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <span className="p-2 sm:p-2.5 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color-light)] text-[var(--accent-color)]">
                          {meta.icon}
                        </span>
                        <div>
                          <h2 className="text-sm sm:text-base font-heading font-bold text-[var(--text-color)] uppercase tracking-wider">
                            {cat.category}
                          </h2>
                          <span className="text-[10px] sm:text-[11px] font-mono text-[var(--text-muted-light)]">
                            {meta.badge}
                          </span>
                        </div>
                      </div>

                      <span className="text-xs font-mono text-[var(--text-muted-light)] font-bold">
                        0{skillCategories.findIndex((c) => c.category === cat.category) + 1}
                      </span>
                    </div>

                    <p className="text-xs text-[var(--text-muted)] mb-4 sm:mb-5 leading-relaxed">
                      {cat.desc}
                    </p>

                    {/* Skill Chips */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill}
                          className="group/chip inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs font-mono rounded-xl bg-[var(--bg-color)] border border-[var(--border-color-light)] text-[var(--text-color)] hover:border-[var(--accent-color)] hover:bg-[var(--card-hover-bg)] transition-all cursor-default"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)] opacity-40 group-hover/chip:opacity-100 transition-opacity" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-5 border-t border-[var(--border-color-light)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted-light)]">
                    <span>Verified stack</span>
                    <span className="text-[var(--text-muted)]">{cat.skills.length} skills listed</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom Navigation CTA */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-base sm:text-lg font-heading font-bold text-[var(--text-color)]">
              See these skills applied to live projects
            </h3>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Explore Infracapitalist, Caaalmly, CropCare, and other full-stack production systems.
            </p>
          </div>

          <Link
            to="/projects"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[var(--text-color)] text-[var(--bg-color)] text-xs font-mono font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 shrink-0 shadow-xs"
          >
            <span>Explore Projects</span>
            <FaArrowLeft size={10} className="rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
