import React from 'react';

import * as S from './menu-list.styles';

export const MenuList: React.FC = () => {
  return (
    <S.MenuListBase>
      <MenuListItem>Save</MenuListItem>
      <MenuListItem>Load</MenuListItem>
      <MenuListItem>Settings</MenuListItem>
      <MenuListItem>Controls</MenuListItem>
      <MenuListItem>Network</MenuListItem>
      <MenuListItem>Play Records</MenuListItem>
      <MenuListItem>Return to Title Screen</MenuListItem>
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
