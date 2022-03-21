import { DefaultTheme } from 'styled-components';

import { pixelToRem } from '../utils';

export const theme: DefaultTheme = {
  colors: {
    primary500: '#fee600',

    secondary100: '#c6dcf7',
    secondary500: '#3483fa',
    secondary700: '#2968c8',

    gray900: '#333333',
    gray700: '#333333',
    gray500: '#666666',
    gray400: '#999999',
    gray300: '#bbbbbb',
    gray200: '#dddddd',
    gray100: '#eeeeee',

    border200: '#f7f7f7',

    success: '#1ed760',

    white: '#ffffff',
  },
  fontSizes: {
    xs: pixelToRem(14),
    sm: pixelToRem(16),
    md: pixelToRem(24),
    lg: pixelToRem(28),
    xl: pixelToRem(46),
  },
  outline: {
    sm: '3px'
  },
  space: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '32px',
  },
  radius: {
    sm: '4px'
  },
  breakpoints: {
    mobile: '565px'
  }
};
