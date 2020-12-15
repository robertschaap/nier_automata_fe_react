import React from 'react';

import * as S from './chip-bar.styles';

export const ChipBar: React.FC = () => {
  return (
    <section>
      <S.ChipContainer>
        <S.Chip storageConsumed={2} />
        <S.Chip storageConsumed={2} />
        <S.Chip storageConsumed={1} />
        <S.Chip storageConsumed={2} />
        <S.Chip storageConsumed={2} />
        <S.Chip storageConsumed={2} />
        <S.Chip storageConsumed={1} />
        <S.Chip storageConsumed={2} />
        <S.Chip storageConsumed={1} />
        <S.Chip storageConsumed={3} />
        <S.Chip storageConsumed={3} />
        <S.Chip storageConsumed={11} />
        <S.Chip storageConsumed={7} />
        <S.Chip storageConsumed={10} isSelected />
        <S.Chip storageConsumed={8} />
        <S.Chip storageConsumed={11} />
        <S.Chip storageConsumed={15} />
        <S.Chip storageConsumed={15} />
        <S.Chip storageConsumed={6} />
        <S.AvailableStorage storageAvailable={9} />
      </S.ChipContainer>
    </section>
  );
};
