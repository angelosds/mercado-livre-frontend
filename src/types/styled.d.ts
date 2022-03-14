import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      // Brand colors
      primary500: string;

      secondary100: string;
      secondary500: string;
      secondary700: string;

      // Grayscale
      gray900: string;
      gray700: string;
      gray500: string;
      gray300: string;

      // White
      white: string;
    },
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    },
    outline: {
      sm: string;
    },
    space: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    },
    radius: {
      sm: string;
    },
  }
}
