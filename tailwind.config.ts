import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#eee7f8",
          100: "#cbb5e9",
          200: "#b191de",
          300: "#8e5ecf",
          400: "#783fc6",
          500: "#560fb8",
          600: "#4e0ea7",
          700: "#3d0b83",
          800: "#2f0865",
          900: "#24064d",
        },
        violet: {
          50: "#e8e7e9",
          100: "#b7b3bb",
          200: "#948f9a",
          300: "#635c6c",
          400: "#453c4f",
          500: "#160b23",
          600: "#140a20",
          700: "#100819",
          800: "#0c0613",
          900: "#09050f",
        },
        grey: {
          50: "#fbfbfb",
          100: "#f2f2f2",
          200: "#ebebeb",
          300: "#e2e2e2",
          400: "#dddddd",
          500: "#d4d4d4",
          600: "#c1c1c1",
          700: "#979797",
          800: "#757575",
          900: "#595959",
        },
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};

export default config;
