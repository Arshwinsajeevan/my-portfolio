import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
            <div className={`
                flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300
                ${scrolled || isOpen ? 'bg-[var(--card-bg)]/80 backdrop-blur-xl border border-[var(--border-color)] shadow-lg w-full max-w-5xl' : 'bg-transparent w-full max-w-6xl'}
            `}>
                <a href="#" className="text-xl font-heading font-bold tracking-tight text-[var(--text-color)]">
                    Arshwin.
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="flex items-center bg-[var(--bg-color)]/50 rounded-full px-2 py-1 border border-[var(--border-color)]">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-color)] hover:bg-[var(--card-bg)] rounded-full transition-all"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={toggleTheme}
                        className="ml-4 p-3 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-color)] hover:border-[var(--accent-color)] transition-colors"
                    >
                        {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
                    </button>

                    <a
                        href="#contact"
                        className="ml-2 px-6 py-2.5 bg-[var(--text-color)] text-[var(--bg-color)] text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
                    >
                        Let's Talk
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-[var(--bg-color)] text-[var(--text-color)] transition-colors"
                    >
                        {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
                    </button>
                    <button onClick={toggleMenu} className="focus:outline-none text-[var(--text-color)]">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-20 left-6 right-6 p-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-2xl md:hidden"
                    >
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={toggleMenu}
                                    className="text-lg font-medium text-[var(--text-muted)] hover:text-[var(--text-color)] transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={toggleMenu}
                                className="w-full py-3 bg-[var(--text-color)] text-[var(--bg-color)] text-center font-medium rounded-xl hover:opacity-90 transition-opacity"
                            >
                                Let's Talk
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
