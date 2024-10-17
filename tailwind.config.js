/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mdC: "835px",
      },
      colors: {
        customGreen: "rgba(96, 148, 104, 1)",
        green: {
          950: "#3F6745",
        },
        orange: {
          950: "#FD661FD9",
        },
      },
      fontSize: {
        xxs: "10px",
        xxxs: "5px",
      },
      width: {
        713: "713px",
        540: "540px",
      },
      lineHeight: {
        9: "9px",
      },
      margin: {
        120: "120px",
      },
      animation: {
        moveLeftRight: "moveLeftRight 1.0s ease-in-out infinite",
      },
      keyframes: {
        moveLeftRight: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-5px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
