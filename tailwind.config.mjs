/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-dark)",
        },
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        vibrant: "var(--color-vibrant)",
        light: "var(--color-light)",
        success: "var(--color-success)",
        info: "var(--color-info)",
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
      }),
      boxShadow: {
        'glow': '0 0 15px rgba(89, 40, 229, 0.5)',
        'glow-accent': '0 0 15px rgba(255, 64, 129, 0.5)',
      },
    },
  },
  plugins: [],
};
