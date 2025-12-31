import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: ['Python', 'JavaScript', 'HTML', 'CSS']
        },
        {
            title: 'Frameworks & Libraries',
            skills: ['React', 'Node.js', 'AngularJS', 'Express.js', 'Flask', 'Django']
        },
        {
            title: 'Machine Learning & AI',
            skills: ['TensorFlow', 'pandas', 'scikit-learn', 'Data Preprocessing', 'Model Training']
        },
        {
            title: 'Databases & Cloud',
            skills: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB', 'Supabase']
        },
        {
            title: 'Tools & Platforms',
            skills: ['Git', 'GitHub', 'Pytest', 'Postman']
        }
    ];

    return (
        <section id="skills" className="py-32 bg-[var(--bg-color)]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-[var(--text-color)]">
                        Technical <span className="text-[var(--accent-color)]">Skills</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-10 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all duration-300"
                        >
                            <h3 className="text-2xl font-heading font-bold text-[var(--text-color)] mb-8">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 text-sm font-medium text-[var(--text-muted)] border border-[var(--border-color)] rounded-lg hover:text-[var(--text-color)] hover:border-[var(--accent-color)] transition-colors duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
