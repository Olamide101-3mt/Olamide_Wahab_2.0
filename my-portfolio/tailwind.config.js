/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          purplefolio: {
            50: "#F8F7FF",
            500: "#6B46FF",
            700: "#4C2BD9"
          }
    },
    keyframes: {
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite'
      }
  },
  plugins: [],
}

}
