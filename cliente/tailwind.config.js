/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#1062FB',
        title:   '#3D8FE6',
        background:'#FFFFFF',
        secondary:'#DCEDF4',
        accent:'#6ACCEB',
      },
      backgroundImage: {
        'gradient-lightblue-purple': 'linear-gradient(45deg, #5CF0F8, #ECDDFE)',
        'gradient-orange-pink': 'linear-gradient(45deg,#FBCA88,#EF69AD)',
        'gradient-blue-purple': 'linear-gradient(45deg,#469FFF,#A39AF9)',
        'gradient-green': 'linear-gradient(45deg,#6FE594,#27A47C)',
      },
  },
  },
  plugins: [],
}

