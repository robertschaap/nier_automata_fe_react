import styled, { css } from 'styled-components';

import block from 'assets/background-block.svg';

export const ViewPortBase = styled.div`
  width: ${({ theme }) => theme.aspectRatio.width}px;
  height: ${({ theme }) => theme.aspectRatio.height}px;
  position: relative;
  overflow: hidden;
`;

export const Background = styled.div`
  color: ${({ theme }) => theme.color.normal};
  background-color: ${({ theme }) => theme.color.light};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const lowerRight = (offsetX = 0, offsetY = 0) => css`
  bottom: 0;
  right: 0;
  transform: translate3d(${offsetX}%, ${offsetY}%, 0);
`;

const upperLeft = (offsetX = 0, offsetY = 0) => css`
  top: 0;
  left: 0;
  transform: translate3d(${offsetX}%, ${offsetY}%, 0);
`;

export const BackgroundCircle = styled.div<{ bottom?: boolean }>`
  position: absolute;
  ${({ bottom }) => bottom ? lowerRight(50, 50) : upperLeft(-50, -50)};
`;

export const BackgroundLine = styled.div<{ bottom?: boolean, offsetX?: number, offsetY?: number}>`
  position: absolute;
  ${({ bottom, offsetX, offsetY }) => bottom ? lowerRight(offsetX, offsetY) : upperLeft(offsetX, offsetY)}
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

export const ForegroundRadial = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-image: url(${block});
  background: radial-gradient(transparent 50%, ${({ theme }) => theme.color.darkest} 150%);
  opacity: 0.5;
  pointer-events: none;
`;

export const ForegroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-image: url(${block});
  pointer-events: none;
  opacity: 0.1;
`;
