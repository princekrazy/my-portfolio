import typography from "@tailwindcss/typography";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [typography],
};
