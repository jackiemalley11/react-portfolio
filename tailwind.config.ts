import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgBlue: '#172442',
        hoverBlue: '#40F6FC',
      },
      boxShadow: {
        'text-glow': '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};
export default config;
