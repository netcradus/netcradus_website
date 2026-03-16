/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#020203", // Deepest Charcoal
                surface: "#080A0F", // Navy Charcoal
                primary: "#00E5FF", // Electric Cyan (Ignition)
                secondary: "#007CFF", // Tech Blue
                accent: "#FF1F7A", // Retaining Pink as a hi-viz technical alert color
                "tech-cyan": "#00E5FF",
                "tech-blue": "#007CFF",
                white: '#ffffff',
                gray: {
                    400: '#a1a1aa',
                    500: '#71717a',
                    800: '#27272a',
                    900: '#18181b',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Syne', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'grid-scroll': 'grid-scroll 20s linear infinite',
                'fade-in': 'fadeIn 0.5s ease-out forwards',
            },
            keyframes: {
                'grid-scroll': {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(50px)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'cyber-gradient': 'linear-gradient(135deg, #FF6B00 0%, #FF1F7A 50%, #8B14CC 100%)',
            }
        },
    },
    plugins: [],
}
