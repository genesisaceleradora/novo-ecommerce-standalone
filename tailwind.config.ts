import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0E1930',
        navy: '#14213D',
        ivory: '#F6F1E8',
        cream: '#FFF8EA',
        gold: '#D6B36A',
        'gold-dark': '#A9833D',
        rose: '#A26769',
        muted: '#667085',
        line: '#E6E0D6',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
