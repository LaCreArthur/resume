module.exports = {
  plugins: [
    require("autoprefixer")({
      grid: "autoplace",
    }),
    require("@tailwindcss/postcss")(),
  ],
};
