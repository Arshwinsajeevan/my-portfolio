import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { personalProjects } from '../data/portfolioData';

const Projects = () => {
  // Show top 3 curated personal projects on home
  const previewProjects = personalProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-[var(--bg-color)] relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-dim)] text-[var(--accent-color)] text-xs font-mono font-medium mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]"></span>
              Independent Builds
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[var(--text-color)] tracking-tight">
              PERSONAL PROJECTS
            </h2>
            <p className="text-sm text-[var(--text-muted)] mt-1.5 max-w-xl">
              Full-stack platforms, machine learning integrations, and developer tools.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] text-xs font-mono text-[var(--text-color)] transition-all shrink-0 w-fit"
          >
            <span>View All 6 Projects</span>
            <FaArrowRight size={10} />
          </Link>
        </div>

        {/* Curated Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-[var(--accent-color)] uppercase tracking-wider font-medium truncate">
                    {project.category}
                  </span>

                  <div className="flex items-center gap-2 shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-color)] rounded-lg hover:bg-[var(--bg-color)] transition-all"
                      >
                        <FaGithub size={13} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} Live Application`}
                        className="p-1.5 text-[var(--text-muted)] hover:text-[var(--accent-color)] rounded-lg hover:bg-[var(--bg-color)] transition-all"
                      >
                        <FaExternalLinkAlt size={11} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors">
                  {project.shortTitle || project.title}
                </h3>

                <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-[var(--border-color-light)]">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-[var(--bg-color)] border border-[var(--border-color-light)] text-[var(--text-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[10px] font-mono text-[var(--text-muted-light)] self-center pl-1">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {project.hasDetail && (
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent-color)] hover:underline pt-1"
                  >
                    <span>Read Case Study</span>
                    <FaArrowRight size={10} />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
