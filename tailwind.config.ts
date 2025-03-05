import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Atkinson Hyperlegible", "sans-serif"],
        secondary: ["Satoshi", "var(--font-body)"],
        logo: ["Montserrat", "var(--font-fallback)"],
        mono: [
          "IBM Plex Mono",
          "Consolas",
          "Andale Mono",
          "Courier New",
          "monospace",
        ],
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        black: "hsl(240, 100%, 0%)",
        gray: {
          5: "hsl(215, 14%, 5%)",
          10: "hsl(215, 14%, 10%)",
          15: "hsl(215, 14%, 15%)",
          20: "hsl(215, 14%, 20%)",
          25: "hsl(215, 14%, 25%)",
          30: "hsl(215, 14%, 30%)",
          40: "hsl(215, 14%, 40%)",
          50: "hsl(215, 14%, 50%)",
          60: "hsl(215, 14%, 60%)",
          70: "hsl(215, 14%, 70%)",
          80: "hsl(215, 14%, 80%)",
          90: "hsl(215, 14%, 90%)",
          95: "hsl(215, 14%, 95%)",
        },
        blue: {
          DEFAULT: "hsl(212, 100%, 61%)",
          dark: "hsl(212, 72%, 39%)",
          grey: "hsl(215, 28%, 17%)",
        },
        green: "hsl(158, 79%, 42%)",
        orange: "hsl(22, 100%, 50%)",
        purple: "hsl(255, 85%, 54%)",
        red: "hsl(351, 100%, 54%)",
        yellow: "hsl(41, 100%, 59%)",
        funGrey: "hsl(215, 28%, 17%)",
        accent: {
          light: "hsl(192, 47%, 65%)",
          mid: "hsl(192, 47%, 35%)",
          dark: "hsl(192, 47%, 25%)",
        },
      },
      backgroundColor: (theme: any) => ({
        "theme-bg": "var(--theme-bg)",
        "theme-bg-hover": "var(--theme-bg-hover)",
        "theme-bg-offset": "var(--theme-bg-offset)",
        "theme-bg-accent": "var(--theme-bg-accent)",
      }),
      textColor: {
        "theme-text": "var(--theme-text)",
        "theme-text-light": "var(--theme-text-light)",
        "theme-text-accent": "var(--theme-text-accent)",
      },
      borderColor: {
        "theme-divider": "var(--theme-divider)",
      },
    },
  },
  plugins: [
    plugin(({ addBase }: { addBase: (base: Record<string, any>) => void }) => {
      addBase({
        ":root": {
          "--theme-bg": "hsl(215, 28%, 17%)",
          "--theme-text": "hsl(215, 14%, 90%)",
          "--theme-divider": "hsl(215, 14%, 10%)",
          "--theme-text-light": "hsl(215, 14%, 80%)",
          "--theme-text-accent": "hsl(192, 47%, 35%)",
        },
      });
    }),
  ],
};

export default config;
