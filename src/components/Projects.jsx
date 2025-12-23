import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaArrowRight } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'CropCare',
            category: 'AI / Machine Learning',
            description: 'CNN-based plant disease detection system with 95% accuracy.',
            tags: ['Python', 'TensorFlow', 'Flask'],
            github: 'https://github.com/Arshwinsajeevan/CropCare.git',
        },
        {
            title: 'Rustique',
            category: 'E-Commerce',
            description: 'Antique trading marketplace with secure auth and listing management.',
            tags: ['MERN', 'Redux', 'React'],
            github: 'https://github.com/Arshwinsajeevan/Rustique.git',
        },
        {
            title: 'News Aggregator',
            category: 'Web App',
            description: 'Real-time global headlines fetcher with categorized feeds.',
            tags: ['AngularJS', 'API'],
            github: 'https://github.com/Arshwinsajeevan/News-site.git',
        },
        {
            title: 'Cutabout',
            category: 'Dashboard',
            description: 'Salon management system for scheduling and analytics.',
            tags: ['React', 'MERN'],
            github: '#',
        },
    ];

    return (
        <section id="projects" className="py-32 bg-[var(--bg-color)]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-[var(--text-color)]">
                        Project <span className="text-[var(--accent-color)]">Works</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-10 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all duration-300 flex flex-col justify-between h-full"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-sm font-mono text-[var(--accent-color)] uppercase tracking-widest">
                                        {project.category}
                                    </span>
                                    <span className="text-4xl font-heading font-bold text-[var(--border-color)] group-hover:text-[var(--text-muted)] transition-colors">
                                        0{index + 1}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-heading font-bold text-[var(--text-color)] mb-4 group-hover:translate-x-2 transition-transform duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
                                    {project.description}
                                </p>
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-3 mb-8">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="px-3 py-1 text-sm border border-[var(--border-color)] rounded-full text-[var(--text-muted)]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-6 pt-6 border-t border-[var(--border-color)]">
                                    <a
                                        href={project.github}
                                        className="flex items-center gap-2 text-[var(--text-color)] font-medium hover:text-[var(--accent-color)] transition-colors"
                                    >
                                        <FaGithub size={18} /> GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
