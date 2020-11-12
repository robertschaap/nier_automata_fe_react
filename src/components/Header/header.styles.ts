import styled from 'styled-components';

export const NavItems = styled.ul`
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
`;
