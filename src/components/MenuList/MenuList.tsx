import React from 'react';

import * as S from './menu-list.styles';

import { Decoration } from 'components/Decoration';
import { WriteText } from 'components/WriteText';

interface MenuListItem {
  icon?: string // TODO: implement properly later and render icon in container
  info?: string;
  isDisabled?: boolean;
  label: string;
}

interface MenuListProps {
  isTopAligned?: boolean;
  items: MenuListItem[];
}

export const MenuList: React.FC<MenuListProps> = ({ isTopAligned, items }) => {
  return (
    <S.MenuListBase isTopAligned={isTopAligned}>
      <S.MenuListWrapper>
        <S.Decoration>
          <Decoration />
        </S.Decoration>
        <S.MenuList>
          {items.map((item, index) => (
            <MenuListItem key={index} {...item}>
            </MenuListItem>
          ))}
        </S.MenuList>
      </S.MenuListWrapper>
    </S.MenuListBase>
  );
};

const MenuListItem: React.FC<MenuListItem> = ({ icon, info, isDisabled, label }) => {
  return (
    <S.MenuListItem isDisabled={isDisabled}>
      <S.MenuListItemBackground />
      <S.MenuListItemFillBar />
      <S.MenuListItemLabel>
        {icon ?? <S.MenuListItemIcon />}
        <S.MenuListItemText>
          <WriteText text={label} />
        </S.MenuListItemText>
        {info && <S.MenuListItemInfo>{info}</S.MenuListItemInfo>}
      </S.MenuListItemLabel>
    </S.MenuListItem>
  );
};
