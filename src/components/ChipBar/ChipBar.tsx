import React from 'react';

import * as S from './chip-bar.styles';

export enum ChipTypes {
  SYSTEM = 'SYSTEM',
  ATTACK = 'ATTACK',
  DEFENSE = 'DEFENSE',
  SUPPORT = 'SUPPORT',
  HACKING = 'HACKING',
}

export const ChipBar: React.FC = () => {
  return (
    <section>
      <S.ChipContainer>
        <S.Chip chipType={ChipTypes.SYSTEM} storage={2} />
        <S.Chip chipType={ChipTypes.SYSTEM} storage={2} />
        <S.Chip chipType={ChipTypes.SYSTEM} storage={1} />
        <S.Chip chipType={ChipTypes.SYSTEM} storage={2} />
        <S.Chip chipType={ChipTypes.SYSTEM} storage={2} />
        <S.Chip chipType={ChipTypes.SYSTEM} storage={2} />
        <S.Chip chipType={ChipTypes.SYSTEM} storage={1} />
        <S.Chip chipType={ChipTypes.SYSTEM} storage={2} />
        <S.Chip chipType={ChipTypes.SYSTEM} storage={1} />
        <S.Chip chipType={ChipTypes.SYSTEM} storage={3} />
        <S.Chip chipType={ChipTypes.SYSTEM} storage={3} />
        <S.Chip chipType={ChipTypes.ATTACK} storage={11} />
        <S.Chip chipType={ChipTypes.ATTACK} storage={7} />
        <S.Chip chipType={ChipTypes.DEFENSE} storage={10} isSelected />
        <S.Chip chipType={ChipTypes.DEFENSE} storage={8} />
        <S.Chip chipType={ChipTypes.DEFENSE} storage={11} />
        <S.Chip chipType={ChipTypes.SUPPORT} storage={15} />
        <S.Chip chipType={ChipTypes.SUPPORT} storage={15} />
        <S.Chip chipType={ChipTypes.SUPPORT} storage={15} />
        <S.Chip chipType={ChipTypes.SUPPORT} storage={6} />
        <S.AvailableStorage storage={9} />
      </S.ChipContainer>
    </section>
  );
};
