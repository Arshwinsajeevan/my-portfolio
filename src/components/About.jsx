import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-[var(--bg-color)]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl font-bold mb-12 text-[var(--text-color)] tracking-tight">
                        About Me
                    </h2>
                    <div className="space-y-6 text-lg text-[var(--text-muted)] leading-relaxed">
                        <p>
                            I am a <strong className="text-[var(--text-color)] font-medium">software developer</strong> with hands-on experience in Python, React, and full-stack development, focused on building scalable, maintainable, and production-ready applications. My work includes designing and consuming REST APIs, integrating databases, troubleshooting and debugging issues, and collaborating within Agile development environments.
                        </p>
                        <p>
                            I also have practical exposure to AI/ML concepts through real-world project work. I enjoy learning new technologies quickly, improving system design, and writing clean, reliable code that delivers real value.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
