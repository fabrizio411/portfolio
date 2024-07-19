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
      },
      colors: {
        'bg': '#F9F8FA',
        'text-1': '#333333',
        'text-2': '#535353',
        'primary': '#7843e9',
        'secondary': '#cbfaed',
        'accent': '#18a982',
        // 'secondary': '#b6aacf',
        // 'accent': '#937fbd',

        'dark-bg': '#171717',
        // 'dark-text-1': '#fafafa',
        // 'dark-text-2': '#a9adb3',
        'dark-text-1': '#fafafa',
        'dark-text-2': '#a9adb3',
      }
    },
  },
  plugins: [],
};

export default config;
