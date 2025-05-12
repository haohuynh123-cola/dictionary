import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#311b92',
    },
    background: {
      default: '#f9f9f9',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <main>
          <HomePage />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
