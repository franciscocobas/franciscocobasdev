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
    boxShadow: {
      white: '0 0 3rem 0 #ffffff75',
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
      margin: ['dark'],
    },
  },
  plugins: [],
};
