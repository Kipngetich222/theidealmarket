/** @type {import('tailwindcss').Config} */ 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#a39179', // Aged gold
          600: '#745d46', // Deeper leather brown for hover
          700: '#2d2315', // Deep crypto-dark for buttons or backgrounds
        },
        secondary: {
          500: '#c7c0ad', // Muted sand
          600: '#e1ded4', // Light accent for contrast
        },
        accent: {
          DEFAULT: '#c06a0c', // Rich amber — highlights/CTAs
        },
        dark: {
          900: '#2d2315', // Deep night mode
          800: '#3a2f1e', // Slightly lighter variation
        },
        bitcoin: '#F7931A',     // Optional — crypto-specific use
        ethereum: '#627EEA',
        usdt: '#26A17B',
        solana: '#9945FF',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
