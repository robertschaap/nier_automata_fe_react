import styled, { DefaultTheme, keyframes } from 'styled-components';

import { Link } from 'components/Link';

const itemHeight = '48px';

export const Navigation = styled.nav`
  display: flex;
  margin: 0 50px;
  margin-top: 35px;
`;

export const Decoration = styled.div`
  height: ${itemHeight};
  margin-right: 35px;
`;

export const NavItems = styled.ul`
  flex: auto;
  display: flex;
  margin: 0;
  padding-left: 0;
  height: 70px;
  list-style-type: none;
  justify-content: space-between;
`;

const pulsate = (theme: DefaultTheme) => keyframes`
  from {
    background-color: ${theme.color.darkest};
  }

  to {
    background-color: ${theme.color.dark};
  }
`;

export const NavItemBase = styled.li<{ isActive?: boolean }>`
  width: 215px;
  height: ${({ isActive }) => isActive ? '70px' : itemHeight};
  transition: height 100ms ease-out;
  background-color: ${({ theme }) => theme.color.darkest};
  color: ${({ theme }) => theme.color.lightest};

  animation: 1000ms linear infinite alternate ${({ theme }) => pulsate(theme)};
`;

// TODO: revisit once router works properly with header, it is barely
// visible when loading.
const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const NavItemActive = styled.div`
  height: ${itemHeight};
  text-transform: uppercase;
  position: relative;

  &:before {
    content: "";
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.color.darkest};
    position: absolute;
    pointer-events: none;
    animation: 100ms ease-out ${fadeOut};
    z-index: 0;
    top: -6px;
    opacity: 0;
  }
`;

export const NavItemLabel = styled.div`
  letter-spacing: 6px;
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  pointer-events: none;
`;

export const NavItemIcon = styled.i`
  width: 23px;
  height: 23px;
  display: inline-block;
  background-color: currentColor;
  margin: 0 8px;
`;

export const NavItemBackground = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.normal};
`;

export const NavItemFillBar = styled.div<{ a?: boolean }>`
  position: absolute;
  z-index: 1;
  width: 0%;
  height: 100%;
  transition: width 100ms ease-out;
  background-color: ${({ theme }) => theme.color.darkest};
  pointer-events: none;
`;

// TODO: deal with isActive, should go transparant but not
// do the top/bottom transition
export const NavItem = styled(Link)`
  display: block;
  height: ${itemHeight};
  text-transform: uppercase;
  position: relative;
  outline: none;
  color: ${({ theme }) => theme.color.darkest};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.lightest};

    ${NavItemFillBar} {
      width: 100%;
    }
  }

  &:before,
  &:after {
    content: '';
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.color.darkest};
    position: absolute;
    transition: top 100ms ease-out, bottom 100ms ease-out;
    pointer-events: none;
    z-index: 0;
  }

  &:before {
    top: 0px;
  }

  &:hover:before,
  &:focus:before {
    top: -6px;
  }

  &:after {
    bottom: 0px;
  }

  &:hover:after,
  &:focus:after {
    bottom: -6px;
  }
`;
