// tailwind.config.js
module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      body: ['NotoSans'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
