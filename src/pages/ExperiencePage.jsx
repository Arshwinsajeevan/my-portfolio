import React from 'react';
import { Link } from 'react-router-dom';
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaCheck, FaArrowRight } from 'react-icons/fa';
import { experienceData, professionalWork } from '../data/portfolioData';

const ExperiencePage = () => {
  return (
    <div className="pt-28 pb-24 bg-[var(--bg-color)]">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        {/* Header Breadcrumb */}
        <div className="mb-10">
          <Link
            to="/"
            className="text-xs font-mono text-[var(--accent-color)] hover:underline inline-flex items-center gap-1.5 mb-3"
          >
            <span>← Back to Overview</span>
          </Link>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-[var(--text-color)] tracking-tight">
            EXPERIENCE
          </h1>
          <p className="text-sm sm:text-lg text-[var(--text-muted)] mt-2 font-light">
            Verified internship and software development engineering track record.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 sm:space-y-12">
          {experienceData.map((exp) => (
            <div
              key={exp.company}
              className="p-5 sm:p-10 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-[var(--border-color-light)]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-color)] font-semibold uppercase tracking-wider mb-1">
                    <FaBuilding size={12} />
                    <span>{exp.company}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-[var(--text-color)]">
                    {exp.role}
                  </h2>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-color)] border border-[var(--border-color)]">
                    <FaCalendarAlt size={11} className="text-[var(--accent-color)]" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-color)] border border-[var(--border-color)]">
                    <FaMapMarkerAlt size={11} className="text-[var(--accent-color)]" />
                    <span>{exp.type}</span>
                  </span>
                </div>
              </div>

              <p className="text-sm text-[var(--text-muted)] mt-6 leading-relaxed">
                {exp.summary}
              </p>

              {/* Specific Product Contributions */}
              <div className="mt-8 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted-light)] font-semibold block">
                  Product Breakdowns & Deliverables:
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color-light)] flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="text-sm font-semibold text-[var(--text-color)] mb-1 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
                          {item.product}
                        </h3>
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed pl-3.5">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-6 mt-8 border-t border-[var(--border-color-light)] flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-[var(--text-muted-light)] mr-2">Technologies Used:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono rounded-lg bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-color)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Case Studies */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-base sm:text-lg font-heading font-bold text-[var(--text-color)]">
              Interested in deep technical architecture?
            </h3>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Explore the detailed Infracapitalist case study covering Next.js, FastAPI, PostgreSQL, and AWS EC2.
            </p>
          </div>
          <Link
            to="/projects/infracapitalist"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[var(--text-color)] text-[var(--bg-color)] text-xs font-mono font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 shrink-0"
          >
            <span>Infracapitalist Case Study</span>
            <FaArrowRight size={10} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
