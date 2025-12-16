import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          alt: '#7C3AED'
        },
        secondary: {
          DEFAULT: '#FF4500',
          dark: '#D94600'
        },
        surface: '#F8FAFC',
        text: {
          primary: '#0F172A',
          secondary: '#64748B'
        }
      }
    }
  },
  plugins: []
}

export default config
