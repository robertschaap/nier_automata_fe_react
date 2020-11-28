import styled from 'styled-components';

export const ViewPortBase = styled.div`
  width: ${({ theme }) => theme.aspectRatio.width}px;
  height: ${({ theme }) => theme.aspectRatio.height}px;
  position: relative;
`;

export const Background = styled.div`
  background-color: ${({ theme }) => theme.color.light};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Layout = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
