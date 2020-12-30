import React from 'react';

export const themes = {
  light: {
    name: 'light',
    primaryColor: '#000000',
    secondaryColor: '#eeeeee',
  },
  dark: {
    name: 'dark',
    primaryColor: '#ffffff',
    secondaryColor: '#222222',
  },
};

const ThemeContext = React.createContext(themes.light);
export default ThemeContext;
