import 'styled-components';

import { COLORS } from './colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof COLORS;
    shadow: string;
    transition: string;
  }
}
