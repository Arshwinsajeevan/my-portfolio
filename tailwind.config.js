/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: ['selector', '[data-theme="dark"]'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                background: 'var(--bg-color)',
                card: 'var(--card-bg)',
                'card-hover': 'var(--card-hover-bg)',
                text: 'var(--text-color)',
                muted: 'var(--text-muted)',
                'muted-light': 'var(--text-muted-light)',
                border: 'var(--border-color)',
                'border-light': 'var(--border-color-light)',
                accent: 'var(--accent-color)',
                'accent-dim': 'var(--accent-dim)',
                glow: 'var(--glow-color)',
            },
        },
    },
    plugins: [],
}
