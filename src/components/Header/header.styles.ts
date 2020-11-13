import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  margin: 0 50px;
`;

export const Decoration = styled.div`
  background-color: hotpink;
  width: 25px;
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

export const NavItem = styled.li<{ isActive?: boolean }>`
  width: 215px;
  height: ${({ isActive }) => isActive ? 70 : 50}px;
  background-color: ${({ theme }) => theme.color.normal};
  text-transform: uppercase;

  &:hover {
    background-color: ${({ theme }) => theme.color.darkest};
  }
`;

export const H1 = styled.h1`
  text-transform: uppercase;
  margin: 0;
  padding: 0 50px;
`;
