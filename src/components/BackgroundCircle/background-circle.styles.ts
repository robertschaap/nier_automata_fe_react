import styled, { keyframes } from 'styled-components';

const expand = keyframes`
  from {
    r: 49%;
  }

  to {
    r: 47%;
  }
`;

export const Circle = styled.circle`
  stroke: ${({ theme }) => theme.color.normal};
  fill: none;
  fill-rule: evenodd;
  stroke-width: 3;
  cx: 50%;
  cy: 50%;
  r: 49%;
  animation: 10s linear infinite alternate ${expand};
`;
