/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors:{
      primary: '#1062FB',
      title:   '#3D8FE6',
      background:'#FFFFFF',
      secondary:'#DCEDF4',
      accent:'#6ACCEB',
    }},
  },
  plugins: [],
}

