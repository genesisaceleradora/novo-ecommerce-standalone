import type { Config } from 'tailwindcss'

const color = (token: string) => `rgb(var(${token}) / <alpha-value>)`

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'galanta-black': color('--color-galanta-black'),
        graphite: color('--color-graphite-medical'),
        slate: color('--color-deep-slate'),
        cyan: color('--color-medical-cyan'),
        aqua: color('--color-clinical-aqua'),
        sterile: color('--color-sterile-white'),
        mist: color('--color-mist-gray'),
        steel: color('--color-steel-gray'),
        signal: color('--color-signal-green'),
        alert: color('--color-alert-amber'),
        clinicalRed: color('--color-clinical-red'),
      },
      fontFamily: {
        display: ['var(--font-display)', 'Arial', 'sans-serif'],
        sans: ['var(--font-sans)', 'Arial', 'sans-serif'],
        technical: ['var(--font-technical)', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        surface: 'var(--shadow-surface)',
        elevated: 'var(--shadow-elevated)',
      },
    },
  },
  plugins: [],
}

export default config
