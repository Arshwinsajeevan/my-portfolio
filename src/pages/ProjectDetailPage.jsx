import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaExclamationTriangle, FaServer, FaDatabase, FaBolt, FaCloud } from 'react-icons/fa';
import { caseStudies } from '../data/portfolioData';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const study = caseStudies[id];

  if (!study) {
    return (
      <div className="pt-36 pb-24 text-center container mx-auto px-4 max-w-xl">
        <h1 className="text-3xl font-heading font-bold text-[var(--text-color)]">Project Not Found</h1>
        <p className="text-sm text-[var(--text-muted)] mt-2">
          The requested case study could not be located.
        </p>
        <Link
          to="/projects"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-color)]"
        >
          <FaArrowLeft size={10} />
          <span>Back to Projects</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 bg-[var(--bg-color)]">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent-color)] hover:underline mb-4"
          >
            <FaArrowLeft size={10} />
            <span>Back to All Projects</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-mono text-[var(--accent-color)] uppercase tracking-wider font-semibold">
              {study.category}
            </span>
            <span className="text-[var(--text-muted-light)]">/</span>
            <span className="text-xs font-mono text-[var(--text-muted)]">{study.status}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[var(--text-color)] tracking-tight">
            {study.title}
          </h1>

          <p className="text-sm sm:text-lg text-[var(--text-muted)] mt-2 sm:mt-3 leading-relaxed font-light">
            {study.tagline}
          </p>

          {/* Action Links */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 mt-6 w-full sm:w-auto">
            {study.github && (
              <a
                href={study.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] text-xs font-mono text-[var(--text-color)] flex items-center justify-center gap-2 transition-all"
              >
                <FaGithub size={14} />
                <span>View Repository</span>
              </a>
            )}

            {study.live && (
              <a
                href={study.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[var(--text-color)] text-[var(--bg-color)] text-xs font-mono font-semibold hover:opacity-90 flex items-center justify-center gap-2 transition-all"
              >
                <FaExternalLinkAlt size={12} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Project Meta Bar */}
        <div className="p-4 sm:p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] mb-8 sm:mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {study.metrics ? (
              study.metrics.map((m) => (
                <div key={m.label}>
                  <span className="text-[10px] sm:text-[11px] font-mono text-[var(--text-muted-light)] uppercase tracking-wider block">
                    {m.label}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[var(--text-color)] mt-0.5 sm:mt-1 block">
                    {m.val}
                  </span>
                </div>
              ))
            ) : (
              <div>
                <span className="text-[11px] font-mono text-[var(--text-muted-light)] uppercase tracking-wider block">
                  My Role
                </span>
                <span className="text-sm font-bold text-[var(--text-color)] mt-1 block">
                  {study.role}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Overview */}
        <div className="space-y-4 mb-10">
          <h2 className="text-xl font-heading font-bold text-[var(--text-color)]">
            Project Overview
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-light">
            {study.overview}
          </p>
        </div>

        {/* Dynamic Detail Sections */}
        <div className="space-y-10 border-t border-[var(--border-color)] pt-10">
          {study.sections &&
            study.sections.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-lg font-heading font-bold text-[var(--text-color)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-color)]"></span>
                  {sec.heading}
                </h3>
                <div className="space-y-2.5 pl-4">
                  {sec.content.map((p, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                      <FaCheckCircle size={12} className="text-[var(--accent-color)] shrink-0 mt-1" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Technology Stack Grid */}
        <div className="border-t border-[var(--border-color)] pt-10 mt-10">
          <h3 className="text-lg font-heading font-bold text-[var(--text-color)] mb-4">
            Technologies & Tools Employed
          </h3>
          <div className="flex flex-wrap gap-2">
            {study.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-color)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Confidentiality / Professional Disclaimer if applicable */}
        {study.disclaimer && (
          <div className="mt-12 p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color-light)] flex items-start gap-3 text-xs text-[var(--text-muted)] leading-relaxed">
            <FaExclamationTriangle size={14} className="text-amber-500 shrink-0 mt-0.5" />
            <span>{study.disclaimer}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
