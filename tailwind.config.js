/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins as a font family
      },
      colors: {
        primary: "#5B78F6",
      },

      animation: {
        carousel: 'carousel 10s linear infinite',
      },
      keyframes: {
        carousel: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    // Configure themes here
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#5B78F6",
          "base-100": "#F6F9FC", // Light background color
          "base-content": "#000000", // Black text color for light theme
          "base-200": "#ffffff",
          "base-300": "#f9f9f9",
          "base-400": "#f9f9f9",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#5B78F6",
          "base-100": "#0F0F0F", // Light background color
          "base-content": "#ffffff", // Black text color for light theme
          "base-content-100": "#e3e3e3", // Black text color for light theme
          "base-200": "#161616",
          "base-300": "#2c2c2c",
        },
      },
    ],
  },
};
