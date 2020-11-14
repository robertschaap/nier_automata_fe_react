import styled from 'styled-components';

export const DecorationBase = styled.svg<{ isDark?: boolean; }>`
  width: 25px;
  height: 100%;
  color: ${({ theme, isDark }) => isDark ? theme.color.darkest : theme.color.normal};
`;

export const Rectangle = styled.rect`
  height: 100%;
  fill: currentColor;
`;
