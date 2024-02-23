/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      SoftBlue: "hsl(215, 51%, 70%)",
      Cyan: "hsl(178, 100%, 50%)",
      VeryDarkBlueMain: "hsl(217, 54%, 11%)",
      VeryDarkBlueCard: "hsl(216, 50%, 16%)",
      VeryDarkBlueLine: "hsl(215, 32%, 27%)",
      White: "hsl(0, 0%, 100%)",
    },
  },
  plugins: [],
};
