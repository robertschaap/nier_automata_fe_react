import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;
