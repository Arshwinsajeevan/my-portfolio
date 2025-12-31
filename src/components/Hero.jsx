import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    const stats = [
        { label: 'Experience', value: 'Intern' },
        { label: 'Projects', value: '5+' },
        { label: 'Focus', value: 'Full Stack' },
    ];

    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--glow-color)] rounded-full blur-[120px] opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--accent-color)] rounded-full blur-[150px] opacity-10 pointer-events-none" />

            <div className="container mx-auto px-6 z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        <h2 className="text-[var(--accent-color)] font-mono text-xl md:text-2xl tracking-widest mb-6 uppercase">
                            Hi, I'm <span className="text-3xl md:text-4xl font-bold text-[var(--text-color)] ml-2">Arshwin Sajeevan</span>
                        </h2>
                        <h1 className="text-5xl md:text-8xl font-heading font-bold leading-tight text-[var(--text-color)] mb-8">
                            SOFTWARE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-color)] to-[var(--text-muted)]">
                                DEVELOPER
                            </span>
                        </h1>
                        <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
                            Building scalable web applications and digital experiences.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <a
                                href="#projects"
                                className="px-10 py-5 bg-[var(--text-color)] text-[var(--bg-color)] font-bold text-lg rounded-full hover:opacity-90 transition-opacity flex items-center gap-3"
                            >
                                View Work <FaArrowRight />
                            </a>
                            <a
                                href="#contact"
                                className="px-10 py-5 border border-[var(--border-color)] text-[var(--text-color)] font-bold text-lg rounded-full hover:bg-[var(--card-bg)] transition-colors"
                            >
                                Contact Me
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
