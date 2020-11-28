import styled from 'styled-components';

export const ViewPortBase = styled.div`
  width: ${({ theme }) => theme.aspectRatio.width}px;
  height: ${({ theme }) => theme.aspectRatio.height}px;
  background-color: ${({ theme }) => theme.color.light};
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
