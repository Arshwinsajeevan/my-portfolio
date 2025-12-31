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
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-10"
                >
                    <h2 className="text-5xl md:text-7xl font-serif font-medium mb-6 text-[var(--text-color)] tracking-tight">
                        Experience
                    </h2>
                    <div className="h-[1px] w-full bg-[var(--border-color)]"></div>
                </motion.div>

                <div className="max-w-3xl">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="border-l border-[var(--border-color)] pl-8 py-4 relative"
                        >
                            <span className="absolute left-[-5px] top-6 w-2.5 h-2.5 bg-[var(--text-color)] rounded-full"></span>

                            <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-4">
                                <h3 className="text-2xl font-serif text-[var(--text-color)]">
                                    {exp.role}
                                </h3>
                                <span className="font-mono text-sm text-[var(--text-muted)]">
                                    @ {exp.company}
                                </span>
                            </div>

                            <span className="inline-block font-mono text-xs text-[var(--text-color)] border border-[var(--border-color)] px-2 py-1 mb-6">
                                {exp.duration}
                            </span>

                            <ul className="space-y-4">
                                {exp.description.map((item, idx) => (
                                    <li key={idx} className="text-[var(--text-muted)] text-sm md:text-base leading-relaxed font-mono">
                                        {`> ${item}`}
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
