module.exports = {
  mode: "jit",
  purge: ["./src/**/*.svelte"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        "sv-orange": "#EE8F00",
        "sv-blue": "#5E5AFF",
        "sv-dark-blue": "#0C145A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
