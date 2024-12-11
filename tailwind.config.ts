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
        hoverPurple: '#817DE9',
        hoverPink: '#E92DBA',
        hoverYellow: '#ECF083'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },    

    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};
export default config;
