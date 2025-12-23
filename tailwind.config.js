/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
            colors: {
                background: 'var(--bg-color)',
                card: 'var(--card-bg)',
                text: 'var(--text-color)',
                muted: 'var(--text-muted)',
                border: 'var(--border-color)',
                accent: 'var(--accent-color)',
                glow: 'var(--glow-color)',
            },
        },
    },
    plugins: [],
}
