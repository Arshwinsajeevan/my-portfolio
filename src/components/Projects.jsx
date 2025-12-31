import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'CropCare',
            category: 'AI System',
            description: [
                'CNN-based system for detecting plant diseases from leaf images.',
                'Applied deep learning models for image classification.',
                'Integrated Supabase for data storage and alert notifications.'
            ],
            tags: ['Python', 'TensorFlow', 'Supabase'],
            github: 'https://github.com/Arshwinsajeevan/CropCare.git',
        },
        {
            title: 'AI Live Chat',
            category: 'LLM Support',
            description: [
                'Customer support agent using Node.js & React.',
                'LLM integration with session persistence.',
                'Full-stack architecture with Prisma and SQLite.'
            ],
            tags: ['Node.js', 'TypeScript', 'Prisma'],
            github: 'https://github.com/Arshwinsajeevan',
        },
        {
            title: 'Rustique',
            category: 'Marketplace',
            description: [
                'MERN platform for antique trading.',
                'Admin-verified listings and secure transactions.',
                'React frontend with smooth user interactions.'
            ],
            tags: ['MongoDB', 'Express', 'React'],
            github: 'https://github.com/Arshwinsajeevan/Rustique.git',
        },
        {
            title: 'NL Image Studio',
            category: 'Editor',
            description: [
                'Browser-based image editor with natural language commands.',
                'Real-time segmentation using BodyPix.',
                'Client-side processing with Canvas.'
            ],
            tags: ['React', 'TensorFlow.js', 'Canvas'],
            github: '#',
        },
        {
            title: 'Weather App',
            category: 'Web App',
            description: [
                'Real-time weather forecasting tool.',
                'Geolocation and search capabilities.',
                'Clean UI with API integration.'
            ],
            tags: ['JavaScript', 'API', 'HTML/CSS'],
            github: '#',
        },
        {
            title: 'Data Analytics',
            category: 'Analytics',
            description: [
                'Web scraping pipeline using Scrapy.',
                'Data aggregation and cleaning with Pandas.',
                'Automated analytical report generation.'
            ],
            tags: ['Python', 'Scrapy', 'Pandas'],
            github: '#',
        },
    ];

    return (
        <section id="projects" className="py-32 bg-[var(--bg-color)]">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <span className="text-[var(--accent-color)] font-bold tracking-widest uppercase text-sm">Selected Work</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 text-[var(--text-color)]">Projects</h2>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="group relative p-8 bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] hover:border-[var(--accent-color)]/30 transition-all duration-500 hover:bg-[var(--card-bg)]/80 flex flex-col justify-between h-auto min-h-[350px]"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-[var(--text-color)] text-[var(--bg-color)] rounded-full hover:scale-110 transition-transform flex items-center justify-center"
                                >
                                    <FaArrowRight size={14} />
                                </a>
                            </div>

                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-xs font-mono px-2 py-1 rounded border border-[var(--border-color)] text-[var(--text-muted)] group-hover:border-[var(--accent-color)] group-hover:text-[var(--accent-color)] transition-colors">
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-[var(--text-color)] mb-4 leading-tight group-hover:text-[var(--accent-color)] transition-colors">
                                    {project.title}
                                </h3>

                                <ul className="space-y-2 mb-6">
                                    {project.description.map((point, i) => (
                                        <li key={i} className="text-[var(--text-muted)] text-sm leading-relaxed flex items-start gap-2">
                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--accent-color)] shrink-0 opacity-60"></span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-6 mt-auto border-t border-[var(--border-color)]/50 group-hover:border-[var(--accent-color)]/20 transition-colors">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="text-xs font-medium text-[var(--text-muted)]">
                                            #{tag}
                                        </span>
                                    ))}
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
