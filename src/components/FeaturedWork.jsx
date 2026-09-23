import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDatabase, FaBolt, FaCloud } from 'react-icons/fa';
import { professionalWork } from '../data/portfolioData';

const FeaturedWork = () => {
  const flagship = professionalWork.find((p) => p.featured) || professionalWork[0];
  const otherProjects = professionalWork.filter((p) => !p.featured);

  return (
    <section id="work" className="py-20 bg-[var(--bg-color)] relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-dim)] text-[var(--accent-color)] text-xs font-mono font-medium mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]"></span>
              Selected Work Preview
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[var(--text-color)] tracking-tight">
              PROFESSIONAL PRODUCTS
            </h2>
            <p className="text-sm text-[var(--text-muted)] mt-1.5 max-w-xl">
              Production platforms spanning Next.js, FastAPI, PostgreSQL, and AWS EC2.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] text-xs font-mono text-[var(--text-color)] transition-all shrink-0 w-fit"
          >
            <span>View All Projects</span>
            <FaArrowRight size={10} />
          </Link>
        </div>

        {/* Flagship Highlight Card: INFRACAPITALIST */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all shadow-xs mb-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[var(--border-color-light)]">
            <div>
              <span className="text-xs font-mono text-[var(--accent-color)] uppercase tracking-wider font-semibold">
                {flagship.category} · Flagship Work
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[var(--text-color)] mt-0.5">
                {flagship.title}
              </h3>
            </div>

            <Link
              to={`/projects/${flagship.slug}`}
              className="px-4 py-2 rounded-xl bg-[var(--text-color)] text-[var(--bg-color)] text-xs font-mono font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5"
            >
              <span>Read Deep Case Study</span>
              <FaArrowRight size={10} />
            </Link>
          </div>

          <p className="text-sm text-[var(--text-muted)] mt-4 leading-relaxed max-w-3xl">
            {flagship.description}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
            <div className="p-3.5 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color-light)]">
              <div className="flex items-center gap-2 text-[var(--accent-color)] mb-1">
                <FaDatabase size={12} />
                <span className="text-[11px] font-mono font-semibold uppercase">Scale</span>
              </div>
              <span className="text-lg font-heading font-bold text-[var(--text-color)]">100+ Projects</span>
              <p className="text-[11px] text-[var(--text-muted)] mt-0.5">Integrated across databases</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color-light)]">
              <div className="flex items-center gap-2 text-emerald-500 mb-1">
                <FaBolt size={12} />
                <span className="text-[11px] font-mono font-semibold uppercase">Optimization</span>
              </div>
              <span className="text-lg font-heading font-bold text-[var(--text-color)]">~500 ms → ~100 ms</span>
              <p className="text-[11px] text-[var(--text-muted)] mt-0.5">API data-loading latency cut</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color-light)]">
              <div className="flex items-center gap-2 text-sky-500 mb-1">
                <FaCloud size={12} />
                <span className="text-[11px] font-mono font-semibold uppercase">Deployment</span>
              </div>
              <span className="text-lg font-heading font-bold text-[var(--text-color)]">AWS EC2 / Linux</span>
              <p className="text-[11px] text-[var(--text-muted)] mt-0.5">Nginx proxy & PM2 daemon</p>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[var(--border-color-light)]">
            <div className="flex flex-wrap gap-1.5">
              {flagship.technologies.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-lg text-xs font-mono bg-[var(--bg-color)] border border-[var(--border-color-light)] text-[var(--text-muted)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              to={`/projects/${flagship.slug}`}
              className="text-xs font-mono text-[var(--accent-color)] hover:underline inline-flex items-center gap-1"
            >
              <span>View full technical breakdown</span>
              <FaArrowRight size={9} />
            </Link>
          </div>
        </motion.div>

        {/* Other Professional Products Teasers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {otherProjects.map((project) => (
            <Link
              key={project.id}
              to={project.hasDetail ? `/projects/${project.slug}` : '/projects'}
              className="p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-[var(--accent-color)] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <FaArrowRight size={10} className="text-[var(--text-muted)] group-hover:text-[var(--accent-color)] group-hover:translate-x-0.5 transition-all" />
                </div>

                <h4 className="text-base font-heading font-bold text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors">
                  {project.title}
                </h4>

                <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[var(--border-color-light)] flex flex-wrap gap-1">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-[var(--bg-color)] border border-[var(--border-color-light)] text-[var(--text-muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
