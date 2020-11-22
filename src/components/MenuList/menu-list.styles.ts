import styled from 'styled-components';

export const MenuListBase = styled.div`
  display: flex;
`;

export const Decoration = styled.div`
  margin-right: 35px;
`;

export const MenuList = styled.ul`
  flex: auto;
  margin: 0;
  padding-left: 0;
  list-style-type: none;
`;

export const MenuListItemFillBar = styled.div`
  position: absolute;
  z-index: 1;
  width: 0%;
  height: 100%;
  transition: width 100ms ease-out;
  background-color: ${({ theme }) => theme.color.darkest};
`;

export const MenuListItem = styled.li`
  height: 48px;
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 28px;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.lightest};
    box-shadow: 3px 3px 3px ${({ theme }) => theme.color.normal};

    ${MenuListItemFillBar} {
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

export const MenuListItemBackground = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.normal};
`;

export const MenuListItemLabel = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
`;

export const MenuListItemIcon = styled.i`
  width: 23px;
  height: 23px;
  display: inline-block;
  background-color: currentColor;
  margin: 0 8px;
`;

export const MenuListItemText = styled.span`
  flex: auto;
`;

export const MenuListItemInfo = styled.span`
  margin-right: 8px;
`;
