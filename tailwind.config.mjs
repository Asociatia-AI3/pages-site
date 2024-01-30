/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "rgb(59 130 246 / var(--tw-bg-opacity))",
        accentHover: "rgb(59 130 246 / var(--tw-bg-opacity))",
        darkBg: "rgb(24 24 27 / var(--tw-bg-opacity))",
      },
      boxShadow: {
        myShadow: "shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
