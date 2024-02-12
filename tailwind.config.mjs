/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "#7480FF",
        accentHover: "rgb(59 130 246 / var(--tw-bg-opacity))",
        darkBg: "#372B7A",
      },
      boxShadow: {
        myShadow: "shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
