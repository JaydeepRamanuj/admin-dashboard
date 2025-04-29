/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        all: "rgba(0, 0, 0, 0.2) 0px 0px 10px 2px",
        b: "rgba(0, 0, 0, 0.2) 0px 2px 5px 0px",
        r: "rgba(0, 0, 0, 0.2) 2px 0px 5px 0px",
        l: "rgba(0, 0, 0, 0.2) -2px 0px 5px 0px",
        t: "rgba(0, 0, 0, 0.2) 0px -2px 5px 0px",

        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      colors: {
        primary: "#141e2c",
        secondary: "#192331",
      },
    },
  },
  plugins: [],
};
