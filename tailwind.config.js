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
          DEFAULT: '#3B82F6',
          dark: '#2563EB',
        },
        secondary: {
          DEFAULT: '#10B981',
          dark: '#059669',
        },
        dark: {
          DEFAULT: '#1F2937',
          light: '#374151',
        },
        bitcoin: '#F7931A',
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