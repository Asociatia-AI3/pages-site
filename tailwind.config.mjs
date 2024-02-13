/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "#25185A",
        secondary: "#1F2A37",
        accentHover: "rgb(59 130 246 / var(--tw-bg-opacity))",
        darkBg: "#372B7A",
        primaryText: "#637381",
        subheading: "#18C0FF",
      },
      boxShadow: {
        custom: "0 4px 18px 0 rgba(0, 0, 0, 0.07)",
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
