import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#E8570A',
          light: '#FF6B1A',
        },
        pink: {
          DEFAULT: '#C2185B',
          light: '#E91E8C',
        },
        cream: '#f5f0eb',
        dark: {
          DEFAULT: '#0d0d0d',
          card: '#1a1a1a',
          card2: '#222222',
          footer: '#080808',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
