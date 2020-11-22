import React from 'react';

import * as S from './menu-list.styles';

import { Decoration } from 'components/Decoration';

interface MenuListProps {
  items: {
    icon?: string;
    info?: string;
    label: string;
  }[]
}

export const MenuList: React.FC<MenuListProps> = ({ items }) => {
  return (
    <section>
      <S.MenuListBase>
        <S.Decoration>
          <Decoration />
        </S.Decoration>
        <S.MenuList>
          {items.map(({ icon, info, label }, index) => (
            <MenuListItem
              key={index}
              icon={icon}
              info={info}
              label={label}>
            </MenuListItem>
          ))}
        </S.MenuList>
      </S.MenuListBase>
    </section>
  );
};

interface MenuListItemProps {
  icon?: string // TODO: implement properly later and render icon in container
  info?: string;
  label: string;
}

const MenuListItem: React.FC<MenuListItemProps> = ({ icon, info, label }) => {
  return (
    <S.MenuListItem>
      <S.MenuListItemBackground />
      <S.MenuListItemFillBar />
      <S.MenuListItemLabel>
        {icon ?? <S.MenuListItemIcon />}
        <S.MenuListItemText>{label}</S.MenuListItemText>
        {info && <S.MenuListItemInfo>{info}</S.MenuListItemInfo>}
      </S.MenuListItemLabel>
    </S.MenuListItem>
  );
};
