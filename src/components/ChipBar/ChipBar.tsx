import React from 'react';

import * as S from './chip-bar.styles';

export const ChipBar: React.FC = () => {
  return (
    <section>
      <S.ChipContainer>
        <S.Chip storage={2} />
        <S.Chip storage={2} />
        <S.Chip storage={1} />
        <S.Chip storage={2} />
        <S.Chip storage={2} />
        <S.Chip storage={2} />
        <S.Chip storage={1} />
        <S.Chip storage={2} />
        <S.Chip storage={1} />
        <S.Chip storage={3} />
        <S.Chip storage={3} />
        <S.Chip storage={11} />
        <S.Chip storage={7} />
        <S.Chip storage={10} isSelected />
        <S.Chip storage={8} />
        <S.Chip storage={11} />
        <S.Chip storage={15} />
        <S.Chip storage={15} />
        <S.Chip storage={6} />
        <S.AvailableStorage storage={9} />
      </S.ChipContainer>
    </section>
  );
};
