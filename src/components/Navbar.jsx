import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes, FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleBrandOrHomeClick = (e, path) => {
    setIsOpen(false);
    if ((path === '/' || !path) && location.pathname === '/') {
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-auto">
        <nav
          className={`flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl transition-all duration-300 border ${
            scrolled
              ? 'bg-[var(--card-bg)]/90 backdrop-blur-md border-[var(--border-color)] shadow-lg shadow-black/5'
              : 'bg-[var(--card-bg)]/70 backdrop-blur-sm border-[var(--border-color-light)]'
          }`}
          aria-label="Main Navigation"
        >
          {/* Logo / Personal Brand */}
          <Link
            to="/"
            onClick={(e) => handleBrandOrHomeClick(e, '/')}
            className="group flex items-center gap-1.5 text-lg font-heading font-bold text-[var(--text-color)] tracking-tight focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] rounded-lg px-1 py-1"
          >
            <span className="group-hover:text-[var(--accent-color)] transition-colors">Arshwin</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)] animate-pulse"></span>
          </Link>

          {/* Desktop Navigation Links (Real Page Routes) */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={(e) => handleBrandOrHomeClick(e, item.path)}
                  className={`px-3 py-1.5 text-xs uppercase tracking-wider font-mono font-medium rounded-lg transition-all ${
                    active
                      ? 'text-[var(--accent-color)] bg-[var(--accent-dim)]'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-color)] hover:bg-[var(--border-color-light)]'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action Icons & Resume */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-[var(--text-muted)] hover:text-[var(--text-color)] hover:bg-[var(--border-color-light)] rounded-lg transition-colors"
            >
              <FaGithub size={16} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-[var(--text-muted)] hover:text-[var(--text-color)] hover:bg-[var(--border-color-light)] rounded-lg transition-colors"
            >
              <FaLinkedin size={16} />
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 text-[var(--text-muted)] hover:text-[var(--text-color)] hover:bg-[var(--border-color-light)] rounded-lg transition-colors focus:outline-none"
            >
              {theme === 'dark' ? <FaSun size={15} /> : <FaMoon size={15} />}
            </button>

            {/* Resume Button */}
            <a
              href={personalInfo.resumeUrl}
              download="Arshwin_Sajeevan_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-semibold rounded-lg bg-[var(--text-color)] text-[var(--bg-color)] hover:opacity-90 transition-opacity shadow-sm"
            >
              <FaFileDownload size={11} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-1 sm:gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 text-[var(--text-muted)] hover:text-[var(--text-color)] rounded-xl focus:outline-none active:scale-95 transition-transform"
            >
              {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
              className="p-2.5 text-[var(--text-color)] focus:outline-none rounded-xl active:scale-95 transition-transform"
            >
              {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu (Real Page Routes) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 p-3 sm:p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xl"
            >
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={(e) => handleBrandOrHomeClick(e, item.path)}
                    className={`px-4 py-3 text-sm font-medium rounded-xl transition-all flex items-center justify-between ${
                      isActive(item.path)
                        ? 'text-[var(--accent-color)] bg-[var(--accent-dim)] font-semibold'
                        : 'text-[var(--text-muted)] hover:text-[var(--text-color)] hover:bg-[var(--border-color-light)]'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive(item.path) && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
                    )}
                  </Link>
                ))}

                <div className="pt-3 mt-2 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-2.5">
                  <div className="flex items-center gap-1">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="p-2.5 text-[var(--text-muted)] hover:text-[var(--text-color)] rounded-lg active:scale-95"
                    >
                      <FaGithub size={18} />
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="p-2.5 text-[var(--text-muted)] hover:text-[var(--text-color)] rounded-lg active:scale-95"
                    >
                      <FaLinkedin size={18} />
                    </a>
                  </div>

                  <a
                    href={personalInfo.resumeUrl}
                    download="Arshwin_Sajeevan_Resume.pdf"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-semibold rounded-xl bg-[var(--text-color)] text-[var(--bg-color)] active:scale-95 transition-transform"
                  >
                    <FaFileDownload size={11} />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
