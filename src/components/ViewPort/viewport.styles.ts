import styled from 'styled-components';

export const ViewPortComponent = styled.div`
  width: ${({ theme }) => theme.aspectRatio.width}px;
  height: ${({ theme }) => theme.aspectRatio.height}px;
  background-color: ${({ theme }) => theme.color.light};
`;
