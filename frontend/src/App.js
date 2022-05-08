import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { getThemeOptions } from './resources/theme';

//Pages
<<<<<<< HEAD
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ResetPassword from './pages/auth/ResetPassword';
import Feed from './pages/main/Feed';
import Memories from './pages/main/Memories';
import LeaderBoard from './pages/main/LeaderBoard';
import Profile from './pages/main/Profile';
import NotFound from './pages/main/NotFound';
import Notifications from './pages/main/Notifications';
=======
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";
import PageLayout from "./pages/main/PageLayout";
import NotFound from "./pages/main/NotFound";
import Notifications from "./pages/main/Notifications";
import ProtectedRoute from "./ProtectedRoute";
>>>>>>> b41a26f9120e6ac5336828e526e8a0fe5c9ca318

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
<<<<<<< HEAD
            <Route path="feed" element={<Feed />} />
            <Route path="scores" element={<LeaderBoard />} />
            <Route path="memories" element={<Memories />} />
            <Route path="profile" element={<Profile />} />
            <Route path="notifications" element={<Notifications />} />
=======
            <Route exact path="/" element={<ProtectedRoute />}>
              <Route path="/home" element={<PageLayout />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="*" element={<NotFound />} />
            </Route>

>>>>>>> b41a26f9120e6ac5336828e526e8a0fe5c9ca318
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Register />} />
            <Route path="reset-pass" element={<ResetPassword />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
