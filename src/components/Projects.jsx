import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaArrowRight } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'CropCare',
            category: 'AI-Driven System',
            description: [
                'Developed a CNN-based system for detecting plant diseases from leaf images.',
                'Applied deep learning models for image classification and real-time prediction workflows.',
                'Integrated Supabase for data storage and alert notifications.'
            ],
            tags: ['Python', 'TensorFlow', 'Supabase'],
            github: 'https://github.com/Arshwinsajeevan/CropCare.git',
        },
        {
            title: 'AI Live Chat Agent',
            category: 'LLM-Based Support',
            description: [
                'Built an AI-powered customer support chat using Node.js, TypeScript, and React.',
                'Executed LLM integration with session persistence and graceful error handling.',
                'Designed and deployed a full-stack architecture using Prisma, SQLite, Render, and Vercel.'
            ],
            tags: ['Node.js', 'TypeScript', 'React', 'Prisma'],
            github: 'https://github.com/Arshwinsajeevan',
        },
        {
            title: 'Rustique',
            category: 'MERN Stack',
            description: [
                'Built a MERN-based platform for buying and selling antiques with admin-verified listings.',
                'Developed a React frontend and integrated APIs for smooth user interactions.'
            ],
            tags: ['MongoDB', 'Express', 'React', 'Node.js'],
            github: 'https://github.com/Arshwinsajeevan/Rustique.git',
        },
        {
            title: 'NL Image Studio',
            category: 'AI Image Editor',
            description: [
                'Built a browser-based image editor using React and BodyPix for real-time segmentation.',
                'Added background replacement, blur, color-pop, and cartoon effects with Canvas.',
                'Designed natural-language editing commands with fully client-side processing.'
            ],
            tags: ['React', 'Node.js', 'TensorFlow.js'],
            github: '#',
        },
        {
            title: 'Weather Forecast',
            category: 'Web Application',
            description: [
                'This is a website to get weather details for corresponding places by search.',
                'Developed the platform using API for real-time data.'
            ],
            tags: ['JavaScript', 'API', 'HTML/CSS'],
            github: '#',
        },
        {
            title: 'Web Data Aggregator',
            category: 'Data Analytics',
            description: [
                'Built a Python data aggregation platform using Scrapy to collect structured web data.',
                'Extracted and cleaned multi-page data using CSS selectors and stored results in SQLite.',
                'Used Pandas to generate analytical reports, summaries, and visualized data insights.'
            ],
            tags: ['Python', 'Scrapy', 'SQLite', 'Pandas'],
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
                                </h3>

                                <ul className="space-y-2 mb-8">
                                    {project.description.map((item, idx) => (
                                        <li key={idx} className="text-[var(--text-muted)] text-base leading-relaxed flex items-start gap-2">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-color)] shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
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
