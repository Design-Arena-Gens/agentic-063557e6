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
        'casino-green': '#0A4D2E',
        'casino-mahogany': '#4A1F1F',
        'casino-gold': '#FFD700',
        'casino-gold-dark': '#B8860B',
      },
      fontFamily: {
        'casino': ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
