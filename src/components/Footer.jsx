import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-[var(--bg-color)] border-t border-[var(--border-color)] text-center">
            <p className="text-[var(--text-muted)] text-sm">
                © {new Date().getFullYear()} Arshwin Sajeevan. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
