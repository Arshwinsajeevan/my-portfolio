import React from 'react';
import { motion } from 'framer-motion';
import { engineeringPrinciples } from '../data/portfolioData';
import { FaLayerGroup, FaTachometerAlt, FaCube, FaShieldAlt } from 'react-icons/fa';

const EngineeringApproach = () => {
  const icons = [
    <FaLayerGroup size={16} />,
    <FaTachometerAlt size={16} />,
    <FaCube size={16} />,
    <FaShieldAlt size={16} />,
  ];

  return (
    <section className="py-20 bg-[var(--bg-color)] border-t border-[var(--border-color)] relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-dim)] text-[var(--accent-color)] text-xs font-mono font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]"></span>
            Philosophy & Mindset
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[var(--text-color)] tracking-tight">
            ENGINEERING PRINCIPLES
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] mt-2 max-w-2xl">
            How I approach building, scaling, and maintaining software in real-world team environments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {engineeringPrinciples.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="p-2.5 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color-light)] text-[var(--accent-color)] inline-block mb-4">
                  {icons[idx]}
                </span>
                <h3 className="text-base font-heading font-bold text-[var(--text-color)]">
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] mt-2.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringApproach;
