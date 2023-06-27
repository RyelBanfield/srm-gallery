import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {},

  plugins: [require("daisyui")],

  daisyui: {},
} satisfies Config;
