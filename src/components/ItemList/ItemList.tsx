import React from 'react';

import * as S from './item-list.styles';

import { Decoration } from 'components/Decoration';

export const ItemList: React.FC = () => {
  return (
    <S.ItemListBase>
      <S.Decoration>
        <Decoration />
      </S.Decoration>
      <S.ItemListWrapper>
        <S.ItemListDecoration />
        <S.ItemList>
          <ItemListItem label="Small Recovery" />
          <ItemListItem label="Medium Recovery" />
          <ItemListItem label="Large Recovery" />
          <ItemListItem label="Full Recovery" />
          <ItemListItem label="Visual Cure" />
          <ItemListItem label="Aural Cure" />
          <ItemListItem label="Cure Manipulation" />
          <ItemListItem label="Cure All Status" />
          <ItemListItem label="Cure All + Heal All" />
        </S.ItemList>
        <S.ItemListDecoration />
      </S.ItemListWrapper>
    </S.ItemListBase>
  );
};

interface ItemListItemProps {
  label: string;
}

const ItemListItem: React.FC<ItemListItemProps> = ({ label }) => {
  return (
    <S.ItemListItem>
      <S.ItemListBackground />
      <S.ItemListItemFillBar />
      <S.ItemListItemLabel>
        <S.ItemListItemIcon />
        <S.ItemListItemText>{label}</S.ItemListItemText>
        <S.ItemListItemInfo>95</S.ItemListItemInfo>
      </S.ItemListItemLabel>
    </S.ItemListItem>
  );
};
