/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
       screens: {
          'ss':'200px',
          },
    },
    plugins: ["prettier-plugin-tailwindcss"],
  }
}

