import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-1': '#171717',
        'dark-2': '#212121',
        'dark-3': '#2f2f2f',
        'dark-4': '#3f3f3f',
        'border': '#414141',
        'text-1': '#ececec',
        'text-2': '#b4b4b4',
        'text-3': '#818690',
        'text-0': '#ffffff',
        'det-1': '#1780ea',
        'det-2': '#146ac0',
        'overlay': 'rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
};
export default config;
