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
                            I am a motivated <strong className="text-[var(--text-color)] font-medium">Software Developer</strong> with a strong foundation in Python, Full-Stack Development, AI, and Machine Learning.
                        </p>
                        <p>
                            Proficient in building scalable, data-driven applications, I enjoy preparing and analyzing data, developing predictive models, and debugging efficiently. I am experienced in using Git for version control and collaborating in Agile environments.
                        </p>
                        <p>
                            My goal is to leverage technology to solve real-world problems, constantly learning and adapting to new tools and frameworks to deliver high-quality solutions.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
