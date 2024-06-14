/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        azul: "#16304E",
        azul2: "#1D4069",
        azul3: "#00558F",
        azul4: "#A0CFEB",
        turquesa: "#185166",
        amarillo: "#DD9C2B",
        amarillo2: "#F6C11B",
        gris: "#6C6C6C",
        gris2: "#EBEBEB",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        90: "90px",
      },
    },
  },
  plugins: [],
};
