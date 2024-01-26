/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: "rgb(147 197 253 / var(--tw-bg-opacity))",
        accentHover: "rgb(59 130 246 / var(--tw-bg-opacity))",
        secondary: "rgb(37 99 235 / var(--tw-text-opacity))",
        primary: "rgb(245,245,220)",
      },
    },
  },
  plugins: [require("daisyui")],
};
