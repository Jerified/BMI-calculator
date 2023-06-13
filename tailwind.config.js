/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(290.1deg, #D6E6FE 0%, rgba(214, 252, 254, 0) 100%)',
      },
      screens: {
        'xs': '280px',
        'sm': '400px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px'
      }
    },
  },
  plugins: [require("daisyui")],
}
