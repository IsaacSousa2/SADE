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
      'xl': {'max': '1160px'},
      'lg': {'max': '1023px'},
      'md': {'max': '800px'},
      'mdMin': { 'min': '800px' },
      'sm': {'max': '639px'},
      'mm': {'max' : '350px'},
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
      boxShadow: {
        'shadowContacts': '0px 0px 20px 5px rgba(63, 24, 158, 0.3)',
      }
    },
  },
  plugins: [],
}
export default config
