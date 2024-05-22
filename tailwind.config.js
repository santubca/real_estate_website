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
        xl:"1.5rem",
        "2xl":"1.75rem",
        "3xl":"2.25rem",
      },
      backgroundImage:{
        'team-bg-image': "url('/public/team/team.png')",      }
    },
  },
  plugins: [],
}

