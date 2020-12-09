import styled from 'styled-components';

export const ItemListBase = styled.section`
  display: flex;
  flex-direction: column;
  width: 506px;
  background-color: ${({ theme }) => theme.color.lightest};
`;

export const ItemList = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style-type: none;
`;

export const ItemListItemFillBar = styled.div`
  position: absolute;
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
`;

export const ItemListItemLabel = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
