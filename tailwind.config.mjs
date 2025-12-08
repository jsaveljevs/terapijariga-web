/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f4',
          100: '#dbf0e3',
          200: '#bae0ca',
          300: '#8cc9a8',
          400: '#5aac81',
          500: '#3a9066',
          600: '#2a7452',
          700: '#235d44',
          800: '#1f4a38',
          900: '#1b3d2f',
          950: '#0d221a',
        },
        warm: {
          50: '#faf8f6',
          100: '#f4f0eb',
          200: '#e8e0d6',
          300: '#d9cbb9',
          400: '#c6b198',
          500: '#b69b7d',
          600: '#a98a6c',
          700: '#8d7259',
          800: '#735e4b',
          900: '#5e4e3f',
          950: '#322920',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
