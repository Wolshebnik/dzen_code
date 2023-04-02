import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { store } from 'store';
import { THEME } from 'config/theme';
import { GlobalStyles } from 'styles/globalStyles';

import { Routes } from './router';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={THEME}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export { App };
