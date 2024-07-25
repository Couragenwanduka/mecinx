/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      textColor: '#660DD7'
    },
    fontFamily: {
      saira: ['Saira', 'sans-serif'],
    },
    margin: {
      

    },
    height:{
     pictureHeight:'40%'
    },
    width:{
     customWidth:'80%',
     customWidth2:'85%'
    
    },
    backgroundImage: {
      'gradient-border': 'linear-gradient(45deg, #D8B4FE, #818CF8)', // Example gradient
    },
  },
};
export const plugins = [];