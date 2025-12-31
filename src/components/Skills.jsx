import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaBrain, FaDatabase, FaTools } from 'react-icons/fa';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming Languages',
            icon: <FaCode size={24} />,
            skills: ['Python', 'JavaScript', 'HTML', 'CSS']
        },
        {
            title: 'Frameworks & Libraries',
            icon: <FaServer size={24} />,
            skills: ['React', 'Node.js', 'AngularJS', 'Express.js', 'Flask', 'Django']
        },
        {
            title: 'Machine Learning & AI',
            icon: <FaBrain size={24} />,
            skills: ['TensorFlow', 'pandas', 'scikit-learn', 'Data Preprocessing', 'Model Training']
        },
        {
            title: 'Databases & Cloud',
            icon: <FaDatabase size={24} />,
            skills: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB', 'Supabase']
        },
        {
            title: 'Tools & Platforms',
            icon: <FaTools size={24} />,
            skills: ['Git', 'GitHub', 'Pytest', 'Postman']
        }
    ];

    return (
        <section id="skills" className="py-20 bg-[var(--bg-color)]">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-[var(--accent-color)] font-bold tracking-widest uppercase text-sm">Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 text-[var(--text-color)]">Technical Arsenal</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group relative p-8 bg-gradient-to-b from-[var(--card-bg)] to-[var(--bg-color)] rounded-3xl border border-[var(--border-color)] hover:border-[var(--accent-color)]/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_var(--accent-color)]/20 h-full"
                        >
                            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[var(--border-color)]/50 group-hover:border-[var(--accent-color)]/20 transition-colors">
                                <span className="p-3 rounded-xl bg-[var(--accent-color)]/10 text-[var(--accent-color)] group-hover:bg-[var(--accent-color)] group-hover:text-[var(--bg-color)] transition-all duration-300">
                                    {category.icon}
                                </span>
                                <h3 className="text-xl font-bold text-[var(--text-color)]">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 text-sm font-medium text-[var(--text-muted)] bg-[var(--bg-color)] border border-[var(--border-color)] rounded-lg group-hover:text-[var(--text-color)] group-hover:border-[var(--accent-color)]/30 transition-all duration-300 cursor-default"
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
