import styled from 'styled-components';

export const ItemListBase = styled.section`
  display: flex;
  flex-direction: column;
  width: 506px;
  background-color: ${({ theme }) => theme.color.lightest};
  box-shadow: 3px 3px ${({ theme }) => theme.utils.toRgba(theme.color.dark, 0.5)};
`;

export const ItemList = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style-type: none;
  width: 461px;
`;

export const ItemListItemFillBar = styled.div`
  position: absolute;
  z-index: 1;
  width: 0%;
  height: 100%;
  transition: width 200ms ease-out;
  background-color: ${({ theme }) => theme.color.darkest};
`;

export const ItemListItem = styled.li`
  height: 48px;
  margin-bottom: 12px;
  position: relative;
  background-color: #eee;

  &:hover {
    color: ${({ theme }) => theme.color.lightest};

    ${ItemListItemFillBar} {
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

  &:hover:before {
    top: -6px;
  }

  &:after {
    bottom: 0px;
  }

  &:hover:after {
    bottom: -6px;
  }
`;

export const ItemListBackground = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.lightest};

`;

export const ItemListItemLabel = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-left: 5px solid transparent;
`;

export const ItemListItemIcon = styled.i`
  width: 36px;
  height: 100%;
  margin-right: 3px;
`;

export const ItemListItemText = styled.span`
  flex: auto;
`;

export const ItemListItemInfo = styled.span`
  margin-right: 15px;
`;
