import styled from 'styled-components';

export const DecorationBase = styled.svg<{ isDark?: boolean; }>`
  color: ${({ theme, isDark }) => isDark ? theme.color.darkest : theme.color.normal};
`;

export const Rectangle = styled.rect`
  fill: currentColor;
`;
