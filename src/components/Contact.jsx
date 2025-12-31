import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-[var(--bg-color)] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--accent-color)] rounded-full blur-[150px] opacity-10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8 text-[var(--text-color)]">
                        Get in <span className="text-[var(--accent-color)]">Touch</span>
                    </h2>
                    <p className="text-[var(--text-muted)] text-lg mb-16 leading-relaxed max-w-2xl mx-auto">
                        I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out through any of the channels below!
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
                        <div className="flex flex-col items-center gap-4 group">
                            <div className="p-5 rounded-2xl bg-[var(--card-bg)] text-[var(--accent-color)] text-2xl border border-[var(--border-color)] group-hover:border-[var(--accent-color)] transition-colors duration-300">
                                <FaEnvelope />
                            </div>
                            <div>
                                <p className="text-xs text-[var(--text-muted)] mb-1">Email Me</p>
                                <a href="mailto:arshwin619@gmail.com" className="text-base font-medium text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors">
                                    arshwin619@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4 group">
                            <div className="p-5 rounded-2xl bg-[var(--card-bg)] text-[var(--accent-color)] text-2xl border border-[var(--border-color)] group-hover:border-[var(--accent-color)] transition-colors duration-300">
                                <FaPhone />
                            </div>
                            <div>
                                <p className="text-xs text-[var(--text-muted)] mb-1">Call Me</p>
                                <a href="tel:+917593071195" className="text-base font-medium text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors">
                                    +91 7593071195
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4 group">
                            <div className="p-5 rounded-2xl bg-[var(--card-bg)] text-[var(--accent-color)] text-2xl border border-[var(--border-color)] group-hover:border-[var(--accent-color)] transition-colors duration-300">
                                <FaLinkedin />
                            </div>
                            <div>
                                <p className="text-xs text-[var(--text-muted)] mb-1">LinkedIn</p>
                                <a href="https://www.linkedin.com/in/arshwin-sajeevan/" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors">
                                    Arshwin Sajeevan
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4 group">
                            <div className="p-5 rounded-2xl bg-[var(--card-bg)] text-[var(--accent-color)] text-2xl border border-[var(--border-color)] group-hover:border-[var(--accent-color)] transition-colors duration-300">
                                <FaGithub />
                            </div>
                            <div>
                                <p className="text-xs text-[var(--text-muted)] mb-1">GitHub</p>
                                <a href="https://github.com/Arshwinsajeevan" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors">
                                    Arshwinsajeevan
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
