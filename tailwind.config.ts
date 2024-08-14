import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "medium-slate-blue": "#7C5DFA",
      "purple-mimosa": "#9277FF",
      dark: "#1E2139",
      "ebony-clay": "#252945",
      "link-water": "#DFE3FA",
      "regent-gray": "#888EB0",
      "wild-blue-yonder": "#7E88C3",
      cinder: "#0C0E16",
      "valentine-red": "#EC5757",
      "light-salmon-pink": "#FF9797",
      "white-lilac": "#F8F8FB",
      mirage: "#141625",
      white: "#FFFFFF",
      "aqua-green": "#33D69F",
      "dark-orange": "#FF8F00",
      "bright-grey": "#373B53",
      steel: "#777F98",
      alabaster: "#F9FAFE",
    },

    extend: {
      fontFamily: {
        sans: ["var(--font-league-spartan)"],
      },
    },
  },
  plugins: [],
};
export default config;
