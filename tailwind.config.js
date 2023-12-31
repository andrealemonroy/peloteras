/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#F0815B',
          dark: '#E86D3E',
          light: '#F59E7B',
          lightest: '#F9BDAF',
        },
        secondary: {
          DEFAULT: '#27097E',
          dark: '#1C053D',
          light: '#3A0CA3',
        },
        btn: {
          DEFAULT: '#F0815B',
          hover: '#E86D3E',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
