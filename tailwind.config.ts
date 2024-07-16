import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  'darkMode': 'class',
  theme: {
    extend: {
      width: {
        'menu': 'calc(100vw - 1rem)'
      }
    },
  },
  plugins: [],
};

export default config;
