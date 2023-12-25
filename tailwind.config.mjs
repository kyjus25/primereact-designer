/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/primereact/passthrough/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#27272A',
        success: '#1ea97c',
        info: '#2463EB',
        warning: '#f59f0a',
        danger: '#7F1D1E',
      },
    },
  },
  plugins: [],
};
