import styled from 'styled-components';

export const HorizontalRule = styled.div`
  height: 45px;
  border-top: 2px solid ${({ theme }) => theme.color.darkest};
`;
