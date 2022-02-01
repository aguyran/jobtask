module.exports = {
  content: ["index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  purge: ["./src/**/*.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        yellowOwl: "#FEC10F",
        secondaryYellowOwl: "#dba70d",
        owlBlack: "#222",
        owlLegend: "#111",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  plugins: [],
};
