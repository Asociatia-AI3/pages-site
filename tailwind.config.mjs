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
      boxShadow: {
        myShadow: "shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
      },
    },
  },
  plugins: [require("daisyui")],
};
