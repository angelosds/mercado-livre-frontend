import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;

    gray900: string;
    gray700: string;
    gray500: string;
    gray300: string;

    white: string;
  }
}
