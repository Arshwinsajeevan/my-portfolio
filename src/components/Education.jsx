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
            degree: 'MEA(R)N - Full Stack Web Development',
            institution: 'Luminar Techno Lab, Kochi, Kerala',
            duration: '2022',
            percentage: 'Certification',
        },
        {
            degree: 'Bachelor’s in Computer Science',
            institution: 'Mahatma Gandhi College',
            duration: '2019 - 2022',
            percentage: '72%',
        },
    ];

    return (
        <section id="education" className="py-24 bg-[var(--bg-color)]">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <span className="text-[var(--accent-color)] font-bold tracking-widest uppercase text-sm">Academic Background</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 text-[var(--text-color)]">Education</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all duration-300 group"
                        >
                            <span className="inline-block px-3 py-1 mb-6 text-xs font-mono rounded-full bg-[var(--bg-color)] text-[var(--text-muted)] border border-[var(--border-color)]">
                                {edu.duration}
                            </span>
                            <h3 className="text-xl font-bold text-[var(--text-color)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">
                                {edu.degree}
                            </h3>
                            <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
                                {edu.institution}
                            </p>
                            <div className="text-sm font-medium text-[var(--text-color)]">
                                Score: <span className="text-[var(--accent-color)]">{edu.percentage}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
