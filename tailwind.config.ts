import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D2240',
          light: '#1E3A5F',
          dark: '#061628',
        },
        gold: {
          DEFAULT: '#B89A5A',
          light: '#D4B896',
          dark: '#8B6914',
        },
        cream: '#FAFAF8',
        charcoal: '#1A1A1A',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
