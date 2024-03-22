import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        title: "#e5c07b",
        varType: "#4D5BCE",
        varName: "#43D9AD",
        varValue: "#E99287",
        text: "#d4d4d4",
        button: "#98C379",
        background: "#1E1E1E",
        darker: "#292929",
      },
    },
    container: {
      center: true,
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
