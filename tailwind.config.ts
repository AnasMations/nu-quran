import type { Config } from "tailwindcss";

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
          50: "#707F7B",
          100: "#043F2E",

        },
        secondary: {
          50: "#DEFF90",
          100: "#BEE663",
          150: "#9ADD00",
          200: "#B5CF7C",
          300: "#B4C197",
        },
        accent: {
          100: "#F7FBEA",
          150: "#E6EECD",
        }
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-up': 'slide-up 1s ease-out',
        'slide-up-delayed': 'slide-up 1.2s ease-out 0.2s',
        'slide-up-delayed-more': 'slide-up 0.5s ease-out 0.4s',
      },
    },
  },
  plugins: [],
} satisfies Config;
