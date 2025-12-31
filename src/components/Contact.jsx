import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-[var(--bg-color)] relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-[var(--accent-color)]/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 text-[var(--text-color)]">
                        Let's <span className="text-[var(--accent-color)]">Connect</span>
                    </h2>
                    <p className="text-[var(--text-muted)] text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                        I'm currently seeking full-time opportunities to contribute my skills to innovative projects.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
                        <a
                            href="mailto:arshwin619@gmail.com"
                            className="px-8 py-4 bg-[var(--text-color)] text-[var(--bg-color)] font-bold text-lg rounded-full hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-3"
                        >
                            <FaEnvelope /> arshwin619@gmail.com
                        </a>
                        <a
                            href="tel:+917593071195"
                            className="px-8 py-4 bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-color)] font-bold text-lg rounded-full hover:border-[var(--accent-color)] transition-all flex items-center justify-center gap-3"
                        >
                            <FaPhone /> +91 7593071195
                        </a>
                    </div>

                    <div className="mb-16">
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-muted)]">
                            <FaMapMarkerAlt className="text-[var(--accent-color)]" />
                            <span>Kannur, Kerala, India</span>
                        </div>
                    </div>

                    <div className="flex justify-center gap-8">
                        <a href="https://www.linkedin.com/in/arshwin-sajeevan/" target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent-color)] transition-colors transform hover:scale-110">
                            <FaLinkedin size={32} />
                        </a>
                        <a href="https://github.com/Arshwinsajeevan" target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent-color)] transition-colors transform hover:scale-110">
                            <FaGithub size={32} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
