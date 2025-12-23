import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-[var(--bg-color)] border-t border-[var(--border-color)]">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-[var(--text-muted)] text-sm">
                    © {new Date().getFullYear()} Arshwin Sajeevan. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <a href="#" className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-color)] transition-colors">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-color)] transition-colors">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
