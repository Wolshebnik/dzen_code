import { DefaultTheme } from 'styled-components';

import { COLORS } from './colors';

const THEME: DefaultTheme = Object.freeze({
  colors: COLORS,
  shadow: '2px 2px 15px 3px rgba(0, 0, 0, 0.2);',
  transition: 'all 300ms ease-in-out',
});

export { THEME };
