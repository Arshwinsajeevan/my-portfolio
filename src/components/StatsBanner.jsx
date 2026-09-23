import React from 'react';
import { motion } from 'framer-motion';
import { verifiedMetrics } from '../data/portfolioData';

const StatsBanner = () => {
  return (
    <section className="py-8 bg-[var(--bg-color)] border-y border-[var(--border-color)] relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {verifiedMetrics.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="block text-2xl sm:text-3xl font-heading font-extrabold text-[var(--text-color)] tracking-tight">
                  {item.value}
                </span>
                <span className="block text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent-color)] mt-1">
                  {item.label}
                </span>
              </div>
              <p className="text-xs text-[var(--text-muted)] mt-3 leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
