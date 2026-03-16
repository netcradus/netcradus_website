/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0D0A0F",

        /* Brand colors from logo */
        primary: "#FF8A1F",   // orange
        secondary: "#FF5A3D", // warm transition orange-red
        accent: "#FF2D8F",    // pink/magenta

        /* Optional named shades */
        "brand-orange": "#FF8A1F",
        "brand-orange-dark": "#E86A00",
        "brand-pink": "#FF2D8F",
        "brand-pink-deep": "#D61A6F",

        white: "#ffffff",
        gray: {
          300: "#C7BCC3",
          400: "#A99AA3",
          500: "#7E6F78",
          700: "#3A2C34",
          800: "#241A21",
          900: "#140E13",
        },
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ['"Playfair Display"', "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      animation: {
        "grid-scroll": "grid-scroll 20s linear infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },

      keyframes: {
        "grid-scroll": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(50px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",

        /* Main brand gradient */
        "brand-gradient":
          "linear-gradient(135deg, #FF8A1F 0%, #FF5A3D 45%, #FF2D8F 100%)",

        /* Softer version for backgrounds */
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(255,138,31,0.18) 0%, rgba(255,90,61,0.14) 45%, rgba(255,45,143,0.16) 100%)",

        /* Hero text gradient */
        "heading-gradient":
          "linear-gradient(90deg, #FF8A1F 0%, #FF5A3D 40%, #FF2D8F 100%)",
      },

      boxShadow: {
        brand: "0 10px 30px rgba(255, 45, 143, 0.18)",
        "brand-lg": "0 20px 60px rgba(255, 45, 143, 0.22)",
        glow: "0 0 40px rgba(255, 138, 31, 0.18)",
      },
    },
  },
  plugins: [],
};