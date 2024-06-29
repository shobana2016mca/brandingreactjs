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
      animation: ['group-hover'],
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(160px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(-100%)', opacity: 0 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(100%)', opacity: 0 },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideOutUp: {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(-100%)', opacity: 0 },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideOutDown: {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(100%)', opacity: 0 },
        },
        popup: {
          '0%': { opacity: 0, transform: 'scale(0.5)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeUp: 'fadeUp 1s ease-in-out',
        fadeOut: 'fadeOut 1s ease-in-out',
        slideInLeft: 'slideInLeft 1s ease-in-out',
        slideOutLeft: 'slideOutLeft 1s ease-in-out',
        slideInRight: 'slideInRight 1s ease-in-out',
        slideOutRight: 'slideOutRight 1s ease-in-out',
        slideInUp: 'slideInUp 1s ease-in-out',
        slideOutUp: 'slideOutUp 1s ease-in-out',
        slideInDown: 'slideInDown 1s ease-in-out',
        slideOutDown: 'slideOutDown 1s ease-in-out',
        popup: 'popup 0.5s ease-out',
      },
    },
  },
  plugins: [],
}
