import styled from 'styled-components';

export const HorizontalRule = styled.div`
  height: 45px;
  border-top: 2px solid ${({ theme }) => theme.color.darkest};
  padding: 0 54px;
  display: flex;
  justify-content: space-between;
`;

export const Circles = styled.i`
  padding-top: 6px;
`;
