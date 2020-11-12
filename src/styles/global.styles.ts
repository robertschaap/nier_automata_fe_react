import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
    font-size: 22px;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;
