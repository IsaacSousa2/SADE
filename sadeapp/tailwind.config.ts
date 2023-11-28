import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      
      'mm': {'max' : '350px'},
      // => @media (max-width: 350px) { ... }

    },
    extend: {
      colors: {
        'darkPurple': '#3F189E',
        'darkOrange' : '#FA6600',
        'lightOrange' : '#FF9348',
        'lightPurple' : '#6948BA',
        'grayMain' : '#F0F2F5',
        'darkGray' : '#737373',
        'purpleBg' : '#E0E7FF'
      },
      keyframes: {
        showSideBar:{
          '0%': { transform: 'translateY(-400px)', opacity: '0' },
        '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        removeSideBar:{
        '100%' :{ transform: 'translateY(0px)', opacity:'1'},
          '0%' :{ transform: 'translateY(-400)', opacity:'0'},
        },
      },
    },
  },
  plugins: [],
}
export default config
