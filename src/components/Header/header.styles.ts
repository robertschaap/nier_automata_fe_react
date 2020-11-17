import styled, { keyframes } from 'styled-components';

import { Link } from 'components/Link';

export const Navigation = styled.nav`
  display: flex;
  margin: 0 50px;
  margin-top: 35px;
`;

export const Decoration = styled.div`
  height: 50px;
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

export const NavItemBase = styled.li<{ isActive?: boolean }>`
  width: 215px;
  height: ${({ isActive }) => isActive ? 70 : 50}px;
  transition: height 100ms ease-out;
  background-color: ${({ theme }) => theme.color.darkest};
  color: ${({ theme }) => theme.color.lightest};
`;

// TODO: revisit once router works properly with header, it is barely
// visible when loading.
const slideDown = keyframes`
  from {
    top: -6px;
  }

  to {
    top: 0px;
  }
`;

export const NavItemActive = styled.div`
  height: 50px;
  text-transform: uppercase;
  position: relative;
  outline: none;

  &:before {
    content: "";
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.color.darkest};
    position: absolute;
    pointer-events: none;
    animation: 100ms ease-out ${slideDown};
    z-index: 0;

  }
`;

export const NavItemLabel = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  pointer-events: none;
`;

export const NavItemIcon = styled.i`
  width: 25px;
  height: 25px;
  display: inline-block;
  background-color: currentColor;
  margin: 0 8px;
`;

export const NavItemBackground = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  transition: width 100ms ease-out;
  background-color: ${({ theme }) => theme.color.normal};
`;

export const NavItemFillBar = styled.div`
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
  height: 50px;
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
    content: "";
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

export const H1 = styled.h1`
  text-transform: uppercase;
  margin: 0;
  padding: 0 50px;
`;
