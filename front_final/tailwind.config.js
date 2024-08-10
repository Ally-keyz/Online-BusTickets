/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
     "./app/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        grow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        rise: {
          '0%': { transform: 'translate(0, 0)', opacity: 1 },
          '100%': { transform: 'translate(80vw, -100vh)', opacity: 0 },
        },
      },
      animation: {
        flicker: 'flicker 1.5s infinite',
        grow: 'grow 2s infinite',
        rise: 'rise 1s ease-out',
      },
      colors:{
        'blue-custom': 'rgb(3, 123, 243)',
        'black-transparent': 'rgba(19, 19, 19, 0.466)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to left, rgb(3, 123, 243), rgba(19, 19, 19, 0.466))',
      },
    },
  },
  plugins: [],
}

