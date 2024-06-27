/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'black-white': 'linear-gradient(to bottom, #19191F 90%, rgb(255, 255, 255) 10%)',
        'white-black': 'linear-gradient(to bottom, rgb(255, 255, 255) 80%, #19191F 20%)',
        'white-gray': 'linear-gradient(to bottom, white 80%, #EBF1F3 20%)',
        'gray-black': 'linear-gradient(to bottom, #EBF1F3 50%, #19191F 50%)',
      },
    },
  },
  plugins: [],
}

