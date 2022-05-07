import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { themeOptions } from "./resources/theme";

//Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";
import Home from "./pages/main/Home";
import NotFound from "./pages/main/NotFound";

const App = () => {
  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home />} />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="reset-pass" element={<ResetPassword />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
