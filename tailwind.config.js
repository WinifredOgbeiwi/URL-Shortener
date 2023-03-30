/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cust-cyan": "#2acfcf",
        "cust-dark-violet": "#3b3054",
        "cust-red": "#f46262",
        "cust-text-gray": "#bfbfbf",
        "cust-gray-violet": "#9e9aa7",
        "cust-dark-blue": "#35323e",
        "cust-dark-gray": "#232127",
      },
    },
  },
  plugins: [],
};

