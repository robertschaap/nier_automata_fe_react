import React from 'react';

import * as S from './item-panel.styles';

export const ItemPanel: React.FC = () => {
  return (
    <S.ItemPanelBase>
      <S.Header>Item Name</S.Header>
      <S.Item>
        <S.Image>No Image Available</S.Image>
        <S.Hr />
        <S.Description>Item Description</S.Description>
        <S.ItemCount>Number held: 95 / 99</S.ItemCount>
      </S.Item>
    </S.ItemPanelBase>
  );
};
