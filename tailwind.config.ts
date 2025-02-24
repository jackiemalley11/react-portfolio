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
        'gradient-custom': 'linear-gradient(135deg, #40F6FC, #9491DB, #E92DBA, #ECF083)', // Define custom gradient background
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
      animation: {
        slideIn: 'slideIn 1s ease-out'
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(300px)', opacity: '0.5' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        }
      }
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
