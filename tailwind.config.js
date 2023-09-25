/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  keyframes: {
    tilt: {
      "0%, 50%, 100%": {
        transform: "rotate(0deg)",
      },
      "25%": {
        transform: "rotate(0.5deg)",
      },
      "75%": {
        transform: "rotate(-0.5deg)",
      },
    },
    blob: {
      "0%, 100%": {
        transform: "translate(0, 0) scale(1)",
      },
      "25%": {
        transform: "translate(20px, -50px) scale(1.1)",
      },
      "50%": {
        transform: "translate(0, 20px) scale(1)",
      },
      "75%": {
        transform: "translate(-20px, -15px) scale(0.9)",
      },
    },
  },
  animation: {
    tilt: "tilt 10s infinite linear",
    blob: "blob 10s infinite",
  },
  plugins: [],
};
