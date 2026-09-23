import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const location = useLocation();

  const handleBrandClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const heroElement = document.getElementById('hero');
      if (window.lenis) {
        window.lenis.scrollTo(heroElement || 0, { duration: 1.0 });
      } else if (heroElement) {
        heroElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.0 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 bg-[var(--bg-color)] border-t border-[var(--border-color)]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity */}
          <div className="text-center md:text-left">
            <Link
              to="/"
              onClick={handleBrandClick}
              className="text-lg font-heading font-bold text-[var(--text-color)] tracking-tight focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] rounded-lg"
            >
              Arshwin<span className="text-[var(--accent-color)]">.</span>
            </Link>
            <p className="text-xs font-mono text-[var(--text-muted)] mt-1">
              Software Developer · {personalInfo.location}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 text-sm font-mono text-[var(--text-muted)]">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text-color)] transition-colors flex items-center gap-1.5"
            >
              <FaGithub size={14} />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text-color)] transition-colors flex items-center gap-1.5"
            >
              <FaLinkedin size={14} />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-[var(--text-color)] transition-colors flex items-center gap-1.5"
            >
              <FaEnvelope size={14} />
              <span>Email</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2.5 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-color)] hover:border-[var(--accent-color)] transition-all flex items-center gap-2 text-xs font-mono"
          >
            <span>Top</span>
            <FaArrowUp size={11} />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--border-color-light)] flex items-center justify-center text-xs font-mono text-[var(--text-muted)] text-center">
          <p>© {new Date().getFullYear()} Arshwin Sajeevan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
