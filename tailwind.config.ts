import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        espresso: '#3E2723',
        cream: '#F5F5DC',
        accent: '#D4A574',
        'soft-white': '#FAFAFA',
        'deep-charcoal': '#2C2C2C',
        'light-beige': '#FDF8F3',
        'warm-gray': '#E8E0D5',
        
        // Dark mode colors
        'dark-brown': '#1A1614',
        'rich-black': '#0F0F0F',
        'soft-white-dark': '#E8E8E8',
        'dark-gray': '#1A1A1A',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-coffee': 'linear-gradient(135deg, #3E2723 0%, #5D4037 50%, #8D6E63 100%)',
        'gradient-warm': 'linear-gradient(135deg, #FDF8F3 0%, #F5F5DC 100%)',
        'pattern-dots': 'radial-gradient(circle, #D4A574 1px, transparent 1px)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      spacing: {
        '128': '32rem',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(212, 165, 116, 0.3)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 40px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
export default config
