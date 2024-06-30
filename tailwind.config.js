/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    fontFamily: {
      sans: 'Poppins,monospace',
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
