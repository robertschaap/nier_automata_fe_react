import styled from 'styled-components';

interface MainProps {
  spacing?: 'space-between';
}

export const Main = styled.main<MainProps>`
  flex: auto;
  display: flex;
  margin: 48px 50px 58px;

  ${({ spacing }) => spacing === 'space-between' && 'justify-content: space-between;'};
`;
