/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'black-white': 'linear-gradient(to bottom, #19191F 90%, rgb(255, 255, 255) 10%)',
        'white-black': 'linear-gradient(to bottom, rgb(255, 255, 255) 80%, #19191F 20%)',
      },
    },
  },
  plugins: [],
}

