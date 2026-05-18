/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ea580c", // orange-600
          hover: "#c2410c", // orange-700
          light: "#fff7ed", // orange-50
        },
        dark: "#111827", // gray-900
        light: "#f9fafb", // gray-50
        ink: {
          DEFAULT: "#111111",
          60: "rgba(17,17,17,0.6)",
          40: "rgba(17,17,17,0.4)",
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        meta: ['0.8125rem', { lineHeight: '1.45', letterSpacing: '0' }],
        body: ['1.0625rem', { lineHeight: '1.55', letterSpacing: '0' }],
        display: ['4.25rem', { lineHeight: '1.04', letterSpacing: '-0.025em' }],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
