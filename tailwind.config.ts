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
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      perspective: {
        'DEFAULT': '1000px',
      },    

    },
  },
  variants: {
    extend: {
      transform: ['group-hover'],
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};
export default config;
