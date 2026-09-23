import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaCheckCircle, FaBriefcase, FaCode } from 'react-icons/fa';
import { professionalWork, personalProjects } from '../data/portfolioData';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all'); // 'all', 'professional', 'personal'

  return (
    <div className="pt-28 pb-24 bg-[var(--bg-color)]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header Breadcrumb */}
        <div className="mb-10">
          <Link
            to="/"
            className="text-xs font-mono text-[var(--accent-color)] hover:underline inline-flex items-center gap-1.5 mb-3"
          >
            <span>← Back to Overview</span>
          </Link>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-[var(--text-color)] tracking-tight">
            PROJECTS & WORK
          </h1>
          <p className="text-sm sm:text-lg text-[var(--text-muted)] mt-2 font-light">
            Production systems, client deliverables, and technical personal builds.
          </p>
        </div>

        {/* Filter Tabs with Edge-to-Edge Mobile Swipe */}
        <div className="flex items-center gap-2 mb-10 border-b border-[var(--border-color)] pb-4 overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all shrink-0 ${
              filter === 'all'
                ? 'bg-[var(--text-color)] text-[var(--bg-color)]'
                : 'bg-[var(--card-bg)] text-[var(--text-muted)] hover:text-[var(--text-color)] border border-[var(--border-color)]'
            }`}
          >
            All Work ({professionalWork.length + personalProjects.length})
          </button>
          <button
            onClick={() => setFilter('professional')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-1.5 shrink-0 ${
              filter === 'professional'
                ? 'bg-[var(--text-color)] text-[var(--bg-color)]'
                : 'bg-[var(--card-bg)] text-[var(--text-muted)] hover:text-[var(--text-color)] border border-[var(--border-color)]'
            }`}
          >
            <FaBriefcase size={11} />
            <span>Professional Work ({professionalWork.length})</span>
          </button>
          <button
            onClick={() => setFilter('personal')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-1.5 shrink-0 ${
              filter === 'personal'
                ? 'bg-[var(--text-color)] text-[var(--bg-color)]'
                : 'bg-[var(--card-bg)] text-[var(--text-muted)] hover:text-[var(--text-color)] border border-[var(--border-color)]'
            }`}
          >
            <FaCode size={11} />
            <span>Personal Projects ({personalProjects.length})</span>
          </button>
        </div>

        {/* 1. PROFESSIONAL WORK SECTION */}
        {(filter === 'all' || filter === 'professional') && (
          <div className="mb-14 sm:mb-16">
            <div className="mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-color)]"></span>
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[var(--text-color)] uppercase tracking-wider">
                Professional Systems & Platforms
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {professionalWork.map((project) => (
                <div
                  key={project.id}
                  className={`p-5 sm:p-8 rounded-3xl bg-[var(--card-bg)] border transition-all flex flex-col justify-between ${
                    project.featured
                      ? 'border-[var(--accent-color)] shadow-md md:col-span-2'
                      : 'border-[var(--border-color)] hover:border-[var(--accent-color)]'
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono text-[var(--accent-color)] uppercase font-semibold">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[var(--accent-dim)] text-[var(--accent-color)] border border-[var(--accent-color)]/30">
                          Featured Flagship
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-[var(--text-color)]">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <span className="text-xs font-mono text-[var(--text-muted)] block mt-0.5">
                        {project.subtitle}
                      </span>
                    )}

                    <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics if present */}
                    {project.metrics && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="p-3 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color-light)]">
                            <span className="text-[11px] font-mono text-[var(--text-muted-light)] block">{m.label}</span>
                            <span className="text-sm font-bold text-[var(--text-color)] mt-0.5 block">{m.val}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Contributions */}
                    <div className="mt-4 space-y-2">
                      {project.contributions.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                          <FaCheckCircle size={11} className="text-[var(--accent-color)] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[var(--border-color-light)] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-[var(--bg-color)] border border-[var(--border-color-light)] text-[var(--text-muted)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {project.hasDetail && (
                      <Link
                        to={`/projects/${project.slug}`}
                        className="px-4 py-1.5 rounded-xl bg-[var(--text-color)] text-[var(--bg-color)] text-xs font-mono font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5 shrink-0"
                      >
                        <span>Case Study</span>
                        <FaArrowRight size={10} />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. PERSONAL PROJECTS SECTION */}
        {(filter === 'all' || filter === 'personal') && (
          <div>
            <div className="mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-color)]"></span>
              <h2 className="text-xl font-heading font-bold text-[var(--text-color)] uppercase tracking-wider">
                Personal Technical Builds
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {personalProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-5 sm:p-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono text-[var(--accent-color)] uppercase tracking-wider truncate">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-2 shrink-0">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-color)] transition-colors"
                          >
                            <FaGithub size={14} />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-[var(--text-muted)] hover:text-[var(--accent-color)] transition-colors"
                          >
                            <FaExternalLinkAlt size={12} />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-heading font-bold text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                      {project.description}
                    </p>

                    <ul className="mt-4 space-y-1.5">
                      {project.points.map((pt, i) => (
                        <li key={i} className="text-xs text-[var(--text-muted)] flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-[var(--accent-color)] mt-1.5 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-5 mt-6 border-t border-[var(--border-color-light)]">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-[var(--bg-color)] border border-[var(--border-color-light)] text-[var(--text-muted)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {project.hasDetail && (
                      <Link
                        to={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent-color)] hover:underline pt-1"
                      >
                        <span>View Case Study</span>
                        <FaArrowRight size={10} />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
