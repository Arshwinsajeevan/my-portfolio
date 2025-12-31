import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
    >
      {/* Subtle Background Gradients */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[var(--glow-color)] rounded-full blur-[180px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[var(--accent-color)] rounded-full blur-[200px] opacity-10 pointer-events-none" />

      <div className="container mx-auto mt-5 px-6 z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-7xl md:text-8xl lg:text-8xl font-heading font-bold text-[var(--text-color)] mb-6 tracking-tighter">
              Arshwin <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-color)] via-[var(--accent-color)] to-[var(--text-color)]">
                Sajeevan
              </span>
            </h1>

            <h2 className="text-xl md:text-3xl font-light text-[var(--text-muted)] mb-8 tracking-wide">
              Building Scalable Digital Experiences
            </h2>

            <p className="text-lg text-[var(--text-muted)] max-w-lg mx-auto mb-12 leading-relaxed">
              I'm a dedicated Software Developer specializing in full-stack applications and
              AI integration.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="#projects"
                className="px-8 py-4 bg-[var(--text-color)] text-[var(--bg-color)] font-bold text-lg rounded-full hover:opacity-90 transition-all transform hover:scale-105 flex items-center gap-3 shadow-lg shadow-[var(--accent-color)]/20"
              >
                View My Work <FaArrowRight size={14} />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-[var(--border-color)] text-[var(--text-color)] font-medium text-lg rounded-full hover:bg-[var(--card-bg)] transition-colors flex items-center gap-3"
              >
                Contact Me
              </a>
            </div>

            {/* Social Proof / Checkmarks or simple text below */}
            <div className="mt-16 flex items-center justify-center gap-8 text-[var(--text-muted)] opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholder for future logos or tech stack icons if desired, keeping it clean for now */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-[var(--border-color)] to-[var(--accent-color)]"></div>
        <span className="text-[10px]  uppercase tracking-[0.2em] text-[var(--text-muted)]">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
