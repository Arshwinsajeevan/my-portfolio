import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pipelineStages } from '../data/portfolioData';
import { FaLaptopCode, FaGitAlt, FaExchangeAlt, FaDatabase, FaServer, FaCogs, FaTachometerAlt, FaRocket } from 'react-icons/fa';

const CodeToProduction = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [
    <FaLaptopCode size={18} />,
    <FaGitAlt size={18} />,
    <FaExchangeAlt size={18} />,
    <FaDatabase size={18} />,
    <FaServer size={18} />,
    <FaCogs size={18} />,
    <FaTachometerAlt size={18} />,
    <FaRocket size={18} />,
  ];

  return (
    <section className="py-24 bg-[var(--bg-color)] border-y border-[var(--border-color)] relative overflow-hidden">
      {/* Subtle technical background grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-dim)] text-[var(--accent-color)] text-xs font-mono font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]"></span>
            Deployment Lifecycle
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[var(--text-color)] tracking-tight">
            FROM CODE TO PRODUCTION
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] mt-2 leading-relaxed">
            From modern Next.js and React architecture through Git version control, backend APIs, relational databases, AWS EC2 compute, and reverse-proxy optimization into live production.
          </p>
        </div>

        {/* Pipeline Visual Track */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {pipelineStages.map((stage, idx) => {
            const isActive = activeStep === idx;
            return (
              <motion.div
                key={stage.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setActiveStep(idx)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between relative ${
                  isActive
                    ? 'bg-[var(--card-bg)] border-[var(--accent-color)] shadow-md ring-1 ring-[var(--accent-color)]/20'
                    : 'bg-[var(--card-bg)]/60 border-[var(--border-color)] hover:border-[var(--accent-color)] hover:bg-[var(--card-bg)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                    <span className="p-2 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color-light)] text-[var(--accent-color)]">
                      {stepIcons[idx]}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted-light)] font-bold">
                      {stage.step}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-heading font-bold text-[var(--text-color)]">
                    {stage.name}
                  </h3>

                  <p className="text-xs text-[var(--text-muted)] mt-1.5 sm:mt-2 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-[var(--border-color-light)]">
                  <span className="inline-block text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--bg-color)] text-[var(--accent-color)] border border-[var(--border-color-light)]">
                    {stage.tech}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Stage Detail Terminal Box (Laptop / Desktop only) */}
        <div className="hidden lg:block mt-8 p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[var(--border-color-light)]">
            <div className="flex items-center gap-2 overflow-hidden">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-[11px] sm:text-xs font-mono text-[var(--text-muted)] ml-1 truncate">
                stage-{pipelineStages[activeStep].step}.sh — {pipelineStages[activeStep].name}
              </span>
            </div>
            <span className="text-[11px] font-mono text-[var(--accent-color)] hidden sm:inline shrink-0">
              Verified Pipeline Knowledge
            </span>
          </div>

          <div className="pt-4 text-xs font-mono text-[var(--text-muted)] leading-relaxed space-y-1 break-words">
            <p className="text-[var(--text-color)]">
              <span className="text-[var(--accent-color)]">$</span> workflow inspect --stage "{pipelineStages[activeStep].name}"
            </p>
            <p>
              [INFO] Core Technology: <span className="text-[var(--accent-color)]">{pipelineStages[activeStep].tech}</span>
            </p>
            <p>
              [DESC] {pipelineStages[activeStep].desc}
            </p>
            <p className="text-emerald-500 dark:text-emerald-400">
              [STATUS] Operational & Production-Tested at NeoMegaOne & VIndia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeToProduction;
