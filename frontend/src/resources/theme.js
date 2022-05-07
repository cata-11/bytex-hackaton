export const getThemeOptions = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          background: "#f2f2f2",
        }
      : {
          // palette values for dark mode
          background: "#1c2128",
        }),
  },
});
