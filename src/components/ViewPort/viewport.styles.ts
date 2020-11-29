import styled, { css } from 'styled-components';

export const ViewPortBase = styled.div`
  width: ${({ theme }) => theme.aspectRatio.width}px;
  height: ${({ theme }) => theme.aspectRatio.height}px;
  position: relative;
  overflow: hidden;
`;

export const Background = styled.div`
  background-color: ${({ theme }) => theme.color.light};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const upperLeft = css`
  bottom: 0;
  right: 0;
  transform: translate3d(50%, 50%, 0);
`;

const lowerRight = css`
  top: 0;
  left: 0;
  transform: translate3d(-50%, -50%, 0);
`;

export const BackgroundCircle = styled.div<{ bottom?: boolean }>`
  position: absolute;
  ${({ bottom }) => bottom ? upperLeft : lowerRight};
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
