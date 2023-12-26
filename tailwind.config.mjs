/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/primereact/passthrough/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FFFFFF',
        primary: '#000000', // shadcn filled primary
        secondary: '#F4F4F5', // shadcn filled secondary, hover color as well
        neutral: '#E4E4E7', // shadcn primary border color
        success: '#1EA97C',
        info: '#3B82F6',
        warning: '#F59F0A',
        help: '#A955F7',
        danger: '#DC2627',
      },
    },
  },
  plugins: [],
};
