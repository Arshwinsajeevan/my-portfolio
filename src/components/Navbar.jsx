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
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`fixed top-6 left-0 right-0 mx-auto z-50 transition-all duration-300 w-fit max-w-[90vw]`}
            >
                <div className="flex items-center justify-between px-6 py-3 rounded-full bg-[var(--card-bg)]/80 backdrop-blur-xl border border-[var(--border-color)] shadow-xl">
                    <a href="#" className="text-xl font-heading font-bold text-[var(--text-color)] mr-8 md:mr-12">
                        Arshwin<span className="text-[var(--accent-color)]">.</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-color)] hover:bg-[var(--bg-color)]/50 rounded-full transition-all duration-300"
                            >
                                {link.name}
                            </a>
                        ))}

                        <div className="w-[1px] h-6 bg-[var(--border-color)] mx-4"></div>

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-[var(--bg-color)]/50 text-[var(--text-muted)] hover:text-[var(--text-color)] transition-colors"
                        >
                            {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
                        </button>

                        <a
                            href="#contact"
                            className="ml-4 px-5 py-2 bg-[var(--text-color)] text-[var(--bg-color)] text-sm font-bold rounded-full hover:opacity-90 transition-opacity"
                        >
                            Hire Me
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
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute top-full left-0 right-0 mt-2 p-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-2xl md:hidden backdrop-blur-2xl"
                        >
                            <div className="flex flex-col space-y-2">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={toggleMenu}
                                        className="p-3 text-center text-base font-medium text-[var(--text-muted)] hover:text-[var(--text-color)] hover:bg-[var(--bg-color)]/50 rounded-xl transition-all"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <a
                                    href="#contact"
                                    onClick={toggleMenu}
                                    className="w-full py-3 mt-2 bg-[var(--text-color)] text-[var(--bg-color)] text-center font-bold rounded-xl hover:opacity-90 transition-opacity"
                                >
                                    Hire Me
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
};

export default Navbar;
