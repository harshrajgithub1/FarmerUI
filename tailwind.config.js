/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGray: '#3A3B3F',
        customGrayDark: '#313235',
        customTextNumber: '#B5B7BE',
        customProductDetails: '#E4EBEF',
        customGreen: '#19846A',
      },
      container: {
        center: true,         // Centers the container by default
        padding: {
          DEFAULT: '1em',        // No padding on smaller screens
          lg: '7em',           // 7em padding only on large screens and above
        },      // Adds padding on both sides of the container
      },
    },
  },
  plugins: [],
};
