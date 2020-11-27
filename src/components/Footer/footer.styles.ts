import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    opacity: 0;
    padding-top: 20px;
  }

  to {
    opacity: 1;
    padding-top: 0px;
  }
`;

export const InfoPanelWrapper = styled.div`
  height: 100px;
  animation: 400ms ease-out ${slideIn};
`;

// TODO: figure out what the proper background colors, =maybe darkest with 0.5 alpha
export const InfoPanel = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 50px;
  height: 80px;
  background-color: ${({ theme }) => theme.color.lightest};
  box-shadow: 3px 3px ${({ theme }) => theme.color.normal};
  letter-spacing: 2px;

  &:after {
    content: '';
    width: 17px;
    height: 17px;
    background-color: ${({ theme }) => theme.color.darkest};
    position: absolute;
    bottom: 7px;
    right: 12px;
  }
`;

export const Decoration = styled.div`
  height: 100%;
  margin-right: 35px;
`;

export const Label = styled.div`
  flex: auto;
`;

export const Buttons = styled.div`
  padding-right: 35px;
`;
