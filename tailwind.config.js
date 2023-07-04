/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#2c83fb',
        'blue-secondary': '#1f76f0',
        'blue-light': '#d4e0f4',
      },
      screens: {
        xs: '320px',
      },
    },
  },
  plugins: [],
}
