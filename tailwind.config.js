/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cassis: {
          50: '#F4ECF5',
          100: '#E3CFE6',
          200: '#C6A0CF',
          300: '#A870B7',
          400: '#8B419F',
          500: '#6E1187',
          600: '#570D6B',
          700: '#41084F',
          800: '#2A0333',
          900: '#150019'
        },
        pearl: {
          50: '#FBFBFB',
          100: '#F7F7F7',
          200: '#EFEFEF',
          300: '#E7E7E7',
          400: '#DFDFDF',
          500: '#D7D7D7',
          600: '#CFCFCF',
          700: '#C7C7C7',
          800: '#BFBFBF',
          900: '#B7B7B7'
        },
        midnight: {
          50: '#EAEAEA',
          100: '#D5D5D5',
          200: '#ABABAB',
          300: '#808080',
          400: '#565656',
          500: '#2B2B2B',
          600: '#222222',
          700: '#1A1A1A',
          800: '#111111',
          900: '#090909'
        }
      },
      fontFamily: {
        sans: ['Courier New', 'monospace'],  // Utilisation de la police monospace par défaut
        mono: ['Courier New', 'monospace'],
      },

      backgroundImage: theme => ({
        'cassis-gradient': 'linear-gradient(135deg, #150019, #41084F, #570D6B, #6E1187)',
      }),
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    flowbitePlugin
  ]
};
