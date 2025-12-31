import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-32 bg-[var(--bg-color)] relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="block text-[var(--accent-color)] text-sm font-bold tracking-widest uppercase mb-4">About Me</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12 text-[var(--text-color)] leading-tight">
                        Crafting digital solutions with code and creativity.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-start">
                        <div className="space-y-6 text-lg md:text-xl text-[var(--text-muted)] leading-relaxed font-light">
                            <p>
                                I am a <strong className="text-[var(--text-color)] font-medium">software developer</strong> with hands-on experience in Python, React, and full-stack development, focused on building scalable, maintainable, and production-ready applications. My work includes designing and consuming REST APIs, integrating databases, troubleshooting and debugging issues, and collaborating within Agile development environments.
                            </p>
                            <p>
                                I also have practical exposure to AI/ML concepts through real-world project work. I enjoy learning new technologies quickly, improving system design, and writing clean, reliable code that delivers real value.
                            </p>
                        </div>

                        {/* Decorative element or simple stat/visual could go here, removing detailed stats to keep it professional/clean */}
                        <div className="hidden md:block w-[1px] h-full bg-gradient-to-b from-[var(--border-color)] to-transparent"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
