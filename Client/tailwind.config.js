// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     './index.html',
//     './src/**/*.{js,ts,jsx,tsx}',
//     'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('flowbite/plugin'),
//   ],
// };

const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    flowbite.content(),
    './index.html',
         './src/**/*.{js,ts,jsx,tsx}',
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};