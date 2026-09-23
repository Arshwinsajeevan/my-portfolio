import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFileDownload, FaCopy, FaCheck, FaArrowRight } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 bg-[var(--bg-color)] border-t border-[var(--border-color)] relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="p-5 sm:p-12 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-dim)] text-[var(--accent-color)] text-xs font-mono font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]"></span>
            Direct Communication
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[var(--text-color)] tracking-tight">
            LET'S BUILD SOMETHING USEFUL.
          </h2>

          <p className="text-xs sm:text-base text-[var(--text-muted)] mt-3 max-w-2xl mx-auto leading-relaxed">
            I'm open to full-time Software Development and Full-Stack opportunities where I can contribute to real-world products and continue growing as an engineer.
          </p>

          {/* Email Pill & Actions */}
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 w-full max-w-lg mx-auto">
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color)] hover:border-[var(--accent-color)] text-xs sm:text-sm font-heading font-bold text-[var(--text-color)] flex items-center justify-center gap-2.5 transition-all shadow-xs"
            >
              <FaEnvelope className="text-[var(--accent-color)] shrink-0" />
              <span className="truncate">{personalInfo.email}</span>
            </a>

            <button
              onClick={copyEmail}
              type="button"
              aria-label="Copy email address"
              className="w-full sm:w-auto px-4 py-3 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color)] hover:border-[var(--accent-color)] text-xs font-mono text-[var(--text-color)] transition-all flex items-center justify-center gap-1.5"
            >
              {copied ? (
                <>
                  <FaCheck size={11} className="text-emerald-500" />
                  <span className="text-emerald-500 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <FaCopy size={11} />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[var(--text-color)] text-[var(--bg-color)] text-xs font-mono font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Open Contact Form</span>
              <FaArrowRight size={10} />
            </Link>
          </div>

          {/* Details & Socials */}
          <div className="mt-8 pt-6 sm:pt-8 border-t border-[var(--border-color-light)] flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono text-[var(--text-muted)]">
            <span className="flex items-center gap-1.5">
              <FaPhone className="text-[var(--accent-color)]" size={12} />
              <span>{personalInfo.phone}</span>
            </span>

            <span className="flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-[var(--accent-color)]" size={12} />
              <span>{personalInfo.location} · Ready to relocate</span>
            </span>

            <div className="flex items-center gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-color)] transition-colors flex items-center gap-1"
              >
                <FaGithub size={13} />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-color)] transition-colors flex items-center gap-1"
              >
                <FaLinkedin size={13} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
