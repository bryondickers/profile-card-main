/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  
  theme: {
    colors:{
      darkCyan:"hsl(var(--dark-cyan))",
      desaturatedBlue:"hsl(var(--desaturated-blue))",
      greyishBlue:"hsl(var(--dark-grayish-blue))",
      darkGrey:"hsl(var(--dark-gray))",
      lightt:"hsl(var(--white))"
     
    },
    extend: {
      backgroundImage:{
        patternTop:"url(./images/bg-pattern-top.svg)",
        patternBottom:"url(./images/bg-pattern-bottom.svg)",
        patternCard:"url(./images/bg-pattern-card.svg)"
      }
      ,
      fontFamily:{
        kumbhFont:"'Kumbh Sans', sans-serif"
      }
    },
  },
  plugins: [],
}

