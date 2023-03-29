import { ThemeProvider } from 'styled-components';

import { THEME } from 'config/theme';
import { GlobalStyles } from 'styles/globalStyles';

import { Routes } from './router';

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export { App };
