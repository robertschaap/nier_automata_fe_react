import React from 'react';

import * as S from './menu-list.styles';

import { Decoration } from 'components/Decoration';

export const MenuList: React.FC = () => {
  return (
    <S.MenuListBase>
      <S.Decoration>
        <Decoration />
      </S.Decoration>
      <S.MenuList>
        <MenuListItem>Save</MenuListItem>
        <MenuListItem>Load</MenuListItem>
        <MenuListItem>Settings</MenuListItem>
        <MenuListItem>Controls</MenuListItem>
        <MenuListItem>Network</MenuListItem>
        <MenuListItem>Play Records</MenuListItem>
        <MenuListItem>Return to Title Screen</MenuListItem>
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
