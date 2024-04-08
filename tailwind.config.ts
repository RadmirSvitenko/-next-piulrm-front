import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: { min: '320px', max: '600px' },

      md: { min: '600px', max: '900px' },

      midmd: { min: '900px', max: '1200px' },

      lg: { min: '1200px', max: '1500px' },

      xl: { min: '1500px', max: '1920px' },
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        montserratOpenSans: ['Montserrat', 'Open Sans', 'sans-serif'],
        comfortaa: ['Comfortaa, sans-serif'],
        inter: ['Inter, sans-serif'],
        Montserrat_Alternates: ['Montserrat_Alternates', 'sans-serif'],
      },
    },

    colors: { white: '#ffffff' },
  },
  plugins: [],
};
export default config;
