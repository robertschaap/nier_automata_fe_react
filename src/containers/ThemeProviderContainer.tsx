import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '../styles';

interface ThemeProviderContainerProps {
  children: React.ReactNode;
}

export const ThemeProviderContainer: React.FC<ThemeProviderContainerProps> = (props) => {
  const { children } = props;

  return (
    <>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};
