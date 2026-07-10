import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f7f7f5',
          100: '#eeeeea',
          200: '#dcdcd4',
          300: '#b8b8ac',
          400: '#8a8a7c',
          500: '#5c5c50',
          600: '#3a3a32',
          700: '#242420',
          800: '#161614',
          900: '#0a0a09',
          950: '#000000',
        },
        paper: {
          DEFAULT: '#f2f0e9',
          dim: '#c9c7bd',
        },
        accent: {
          DEFAULT: '#a855f7',
          muted: '#7e22ce',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '0.98', letterSpacing: '-0.01em', fontWeight: '400' }],
        'display-lg': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.01em', fontWeight: '400' }],
        'display-md': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '400' }],
        'display-sm': ['2rem', { lineHeight: '1.2', letterSpacing: '0', fontWeight: '400' }],
        'headline-lg': ['1.5rem', { lineHeight: '1.4', fontWeight: '400' }],
        'headline-md': ['1.25rem', { lineHeight: '1.5', fontWeight: '400' }],
        'headline-sm': ['1.125rem', { lineHeight: '1.5', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75', fontWeight: '300' }],
        'body-md': ['1rem', { lineHeight: '1.75', fontWeight: '300' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '300' }],
        'label': ['0.75rem', { lineHeight: '1.5', fontWeight: '500', letterSpacing: '0.08em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        'none-ish': '0.125rem',
      },
      boxShadow: {
        'glow': '0 0 60px rgba(242, 240, 233, 0.08)',
        'glow-sm': '0 0 30px rgba(242, 240, 233, 0.06)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mono': 'linear-gradient(135deg, #f2f0e9 0%, #8a8a7c 50%, #f2f0e9 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0a0a09 0%, #000000 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
