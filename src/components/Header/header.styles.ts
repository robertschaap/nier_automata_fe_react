import styled, { css } from 'styled-components';

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

// TODO: deal with isActive, should go transparant but not
// do the top/bottom transition
export const NavItem = styled.div`
  height: 50px;
  text-transform: uppercase;
  position: relative;

  &:before,
  &:after {
    content: "";
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.color.darkest};
    position: absolute;
    transition: top 100ms ease-out, bottom 100ms ease-out;
    pointer-events: none;
    opacity: 0;
  }

  &:after {
    bottom: 0px;
  }

  &:hover:after {
    opacity: 1;
    bottom: -6px;
  }

  &:before {
    top: 0px;
  }

  &:hover:before {
    opacity: 1;
    top: -6px;
  }

`;

export const NavItemFillBar = styled.div`
  position: absolute;
  width: 0%;
  height: 100%;
  transition: width 100ms ease-out;
  background-color: ${({ theme }) => theme.color.darkest};
`;

export const NavItemBase = styled.li<{ isActive?: boolean }>`
  width: 215px;
  height: ${({ isActive }) => isActive ? 70 : 50}px;
  transition: height 100ms ease-out;
  background-color: ${({ theme }) => theme.color.normal};

  ${({ isActive }) => isActive && css`
    color: ${({ theme }) => theme.color.lightest};
    background-color: ${({ theme }) => theme.color.darkest};
  `}

  &:hover {
    color: ${({ theme }) => theme.color.lightest};

    ${NavItemFillBar} {
      width: 100%;
    }
  }
`;

export const NavItemLabel = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const NavItemIcon = styled.i`
  width: 25px;
  height: 25px;
  display: inline-block;
  background-color: currentColor;
  margin: 0 8px;
`;

export const H1 = styled.h1`
  text-transform: uppercase;
  margin: 0;
  padding: 0 50px;
`;
