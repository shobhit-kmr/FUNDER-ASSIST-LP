/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
     orange: "#FF8B0A",
      yellow: "#FFC300",
      blue: "#003566",
      white:"#ffffff",
      black:"#000000",
      buttongradient:"",
      boxgradient:"",
     
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      // font-bold
      'h': '128px',    // leading 9rem 
      'h1': '64px',    // leading 4.8 rem something
      'h2': '48px',    // leading 4.5rem 
      'h3': '36px',    // leading 2.9rem 
      'h4': '24px',     // leading 1.9rem 
      'h5': '18px',     // leading 1.5rem 
      'h6': '14px',     // leading 1.1rem 

      // font-semibold
      'p': '16px',      // leading 1.5rem 



    },
    extend: {},
  },
  plugins: [],
};





