import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#8b5cf6',
                'primary-dark': '#7c3aed',
                secondary: '#10b981',
                accent: '#3b82f6',
                'bg-dark': '#0a0a0a',
                'bg-card': '#1a1a1a',
                'bg-card-hover': '#262626',
                'text-primary': '#ffffff',
                'text-secondary': '#a1a1aa',
            },
            animation: {
                'float': 'float 20s ease-in-out infinite',
                'float-reverse': 'float 25s ease-in-out infinite reverse',
                'gradient': 'gradient 3s ease infinite',
                'spin-slow': 'spin 3s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
                    '33%': { transform: 'translate(30px, -30px) rotate(120deg)' },
                    '66%': { transform: 'translate(-20px, 20px) rotate(240deg)' },
                },
                gradient: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
export default config