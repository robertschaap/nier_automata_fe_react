import React from 'react';

import * as S from './menu-list.styles';

import { Decoration } from 'components/Decoration';

interface MenuListProps {
  items: {
    label: string;
  }[]
}

export const MenuList: React.FC<MenuListProps> = ({ items }) => {
  return (
    <S.MenuListBase>
      <S.Decoration>
        <Decoration />
      </S.Decoration>
      <S.MenuList>
        {items.map(({ label }, index) => (
          <MenuListItem key={index}>{label}</MenuListItem>
        ))}
      </S.MenuList>
    </S.MenuListBase>
  );
};

interface MenuListItemProps {
  children: string;
}

const MenuListItem: React.FC<MenuListItemProps> = ({ children }) => {
  return (
    <S.MenuListItem>
      <S.MenuListItemBackground />
      <S.MenuListItemFillBar />
      <S.MenuListItemLabel>
        <S.MenuListItemIcon /> {children}
      </S.MenuListItemLabel>
    </S.MenuListItem>
  );
};
