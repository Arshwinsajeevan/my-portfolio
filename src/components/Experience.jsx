import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: 'VIndia Infrasec Pvt. Ltd.',
            role: 'Full Stack Developer Intern',
            duration: 'Feb 2025 - May 2025',
            description: [
                'Developed a custom website and CRM for a construction firm using Python, Django, and React.',
                'Designed and maintained REST APIs.',
                'Implemented MySQL databases and optimized query performance for large datasets.',
                'Used Git and GitHub for version control and team collaboration.',
            ],
        },
    ];

    return (
        <section id="experience" className="py-32 bg-[var(--bg-color)]">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <span className="text-[var(--accent-color)] font-bold tracking-widest uppercase text-sm">Career Path</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 text-[var(--text-color)]">Experience</h2>
                </motion.div>

                <div className="relative border-l-2 border-[var(--border-color)] ml-3 md:ml-6 space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timestamp Dot */}
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--accent-color)] ring-4 ring-[var(--bg-color)]"></span>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                <h3 className="text-2xl font-bold text-[var(--text-color)]">{exp.role}</h3>
                                <span className="text-sm font-mono text-[var(--text-muted)] bg-[var(--card-bg)] px-3 py-1 rounded-full border border-[var(--border-color)] mt-2 sm:mt-0 w-fit">
                                    {exp.duration}
                                </span>
                            </div>

                            <h4 className="text-lg font-medium text-[var(--accent-color)] mb-6">{exp.company}</h4>

                            <ul className="space-y-3">
                                {exp.description.map((item, idx) => (
                                    <li key={idx} className="text-[var(--text-muted)] leading-relaxed flex items-start">
                                        <span className="mr-3 mt-2 w-1.5 h-1.5 bg-[var(--text-muted)] rounded-full shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
