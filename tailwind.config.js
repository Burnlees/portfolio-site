/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#0B0014",
          600: "#F96900",
          100: "#FDECEF",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyUI: {
    themes: [
      {
        mytheme: {
          900: "#0B0014",
          600: "#F96900",
          100: "#FDECEF",
        },
      },
    ],
  },
};
