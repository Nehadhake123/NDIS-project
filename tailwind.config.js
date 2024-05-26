/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/About/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Product/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Blogs/**/*.{js,ts,jsx,tsx,mdx}",

   
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "taittle-color": "#142653",
        gray: "rgba(255, 255, 255, 0.15)",
        "background-color": "#fffcf3",
        "primery-color": "#ffa32b",
        "paragraph-font-color": "#4f5b78",
        gainsboro: "#e6e6e6",
        "background-color": "#fffcf3",
        black: "#000",
        whitesmoke: "#e9e9e9",
        chocolate: "#cc7000",
        orange: "rgba(255, 163, 43, 0.24)",
        darkgray: {
          "100": "#9c9c9c",
          "200": "rgba(153, 153, 153, 0.2)",
        },
        "paragraph-font-color": "#4f5b78",
        orange: "#ffa32b",
        chocolate: "#cc7000",
        midnightblue: {
          "100": "rgba(11, 41, 114, 0.05)",
          "200": "rgba(11, 41, 114, 0.1)",
        },
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
      },
      borderRadius: {
        "11xl": "30px",
        "23xl": "42px",
        "12xs": "1px",
        "9xl": "28px",
        "4xs": "9px",
        "15xl": "34px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "13xl": "32px",
      "7xl": "26px",
      xl: "20px",
      "29xl": "48px",
      "21xl": "40px",
      "10xl": "29px",
      "19xl": "38px",
      "3xs": "10px",
      sm: "14px",
      "45xl": "64px",
      "32xl": "51px",
      inherit: "inherit",
      lg: "18px",
      "37xl": "56px",
      "13xl": "32px",
      "7xl": "26px",
      
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
}

