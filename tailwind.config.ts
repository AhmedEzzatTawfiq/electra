import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightOrange : "#ef3636",
        darkOrange: "#ef3636",
        lightText: "#888888",
        accent: "#000000",
        accentWhite: "#FFFFFF",
        lightRed: "#ef3636",
        lightGreen: "#41CE09",
        bgLight: "#F8F8F8",
        lightBlue: "#2563eb",
      },
      keyframes: {
        bounceOnce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        'bounce-once': 'bounceOnce 0.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
