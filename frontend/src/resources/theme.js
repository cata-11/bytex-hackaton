export const getThemeOptions = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          //   background: "#f2f2f2",
          primary: { main: "#342fae" },
        }
      : {
          // palette values for dark mode
          //   background: "#1c2128",
          // primary: "#342fae",
        }),
  },
});
