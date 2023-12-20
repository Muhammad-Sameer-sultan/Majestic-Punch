import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: {
          "100": "rgba(217, 217, 217, 0.6)",
          "200": "rgba(217, 217, 217, 0.3)",
        },
        black: "#000",
        lightseagreen: {
          "100": "#0abab5",
          "200": "rgba(10, 186, 181, 0.1)",
        },
        darkslategray: "#36454f",
        powderblue: {
          "100": "#b0e0e6",
          "200": "rgba(176, 224, 230, 0.2)",
        },
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "work-sans": "'Work Sans'",
      },
      borderRadius: {
        "31xl": "50px",
        xl: "20px",
        "26xl": "45px",
      },
    },
    fontSize: {
      lg: "18px",
      "3xl": "22px",
      xl: "20px",
      "51xl": "70px",
      "23xl": "42px",
      "9xl": "28px",
      "13xl": "32px",
      "33xl": "52px",
      base: "16px",
      "11xl": "30px",
      inherit: "inherit",
    },
    screens:{
      'xxsm': '375px',
      'xsm': '420px',
      'xmd': '500px',
      'sm':'640px',
      'md': '768px',
      'slg': '870px',
      'lg': '1024px',
      'xslg': '1100px',
      'xl':'1280px',
      'xlg': '1250px'
    }
  },

  plugins: [],
}
export default config
