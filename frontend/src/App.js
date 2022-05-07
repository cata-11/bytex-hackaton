import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { getThemeOptions } from './resources/theme';

//Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ResetPassword from './pages/auth/ResetPassword';
import Feed from './pages/main/Feed';
import Memories from './pages/main/Memories';
import LeaderBoard from './pages/main/LeaderBoard';
import Profile from './pages/main/Profile';
import NotFound from './pages/main/NotFound';

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {}
});

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState(prefersDarkMode ? 'dark' : 'light');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getThemeOptions(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="feed" element={<Feed />} />
            <Route path="scores" element={<LeaderBoard />} />
            <Route path="memories" element={<Memories />} />
            <Route path="profile" element={<Profile />} />

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="reset-pass" element={<ResetPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
