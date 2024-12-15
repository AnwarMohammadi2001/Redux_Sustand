/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shadowRotate: {
          "0%": { boxShadow: "0 0 10px rgba(43, 185, 135, 0.8)" },
          "25%": { boxShadow: "10px 10px 20px rgba(29, 78, 216, 0.8)" },
          "50%": { boxShadow: "0 0 20px rgba(255, 75, 75, 0.8)" },
          "75%": { boxShadow: "-10px -10px 20px rgba(255, 183, 3, 0.8)" },
          "100%": { boxShadow: "0 0 10px rgba(43, 185, 135, 0.8)" },
        },
      },
      animation: {
        shadowRotate: "shadowRotate 4s infinite ease-in-out",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
