import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
    font-size: 22px;
    color: ${theme.color.darkest};
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;
