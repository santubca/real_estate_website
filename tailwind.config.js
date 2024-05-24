/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        sm:"0.75rem",
        base:"0.87rem",
        baseb:"0.90rem",
        md:"1rem",
        lg:"1.25rem",
        blg:"1.125rem",
        bblg:"1.375",
        xl:"1.5rem",
        "2xl":"1.75rem",
        "3xl":"2.25rem",
        "3xxl":"2.875rem",
        "4xl":"3rem",
      },
      backgroundImage:{
        'team-bg-image': "url('/public/team/team.png')",      }
    },
  },
  plugins: [],
}

