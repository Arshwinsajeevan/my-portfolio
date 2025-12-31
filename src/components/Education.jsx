import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const education = [
        {
            degree: 'Master of Computer Application (MCA)',
            institution: 'Chinmaya Institute of Technology, Kannur, Kerala',
            duration: '2023 - 2025',
            percentage: '76%',
        },
        {
            degree: 'Bachelor of Computer Science',
            institution: 'Mahatma Gandhi College, Kannur, Kerala',
            duration: 'Graduated', // Or put year if known, but resume just says degree
            percentage: '72%',
        },
    ];

    return (
        <section id="education" className="py-24 bg-[var(--bg-color)]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-[var(--text-color)]">
                        Education
                    </h2>
                    <div className="h-[1px] w-24 bg-[var(--accent-color)]"></div>
                </motion.div>

                <div className="space-y-8 max-w-4xl">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-[var(--card-bg)] p-8 rounded-3xl border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-[var(--text-color)] mb-2">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-lg text-[var(--text-muted)] mb-2">
                                        {edu.institution}
                                    </p>
                                    <div className="flex items-center gap-4 mt-4">
                                        <span className="px-3 py-1 text-sm rounded-full bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-muted)]">
                                            Percentage: {edu.percentage}
                                        </span>
                                    </div>
                                </div>
                                <span className="inline-block px-4 py-2 bg-[var(--accent-color)]/10 text-[var(--accent-color)] rounded-full text-sm font-medium self-start">
                                    {edu.duration}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
