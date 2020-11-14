import React from 'react';

import * as S from './decoration.styles';

interface DecorationProps {
  isDark?: boolean;
}

export const Decoration: React.FC<DecorationProps> = ({ isDark }) => {
  return (
    <S.DecorationBase isDark={isDark}>
      <S.Rectangle width='14' />
      <S.Rectangle width='3' transform='translate(22)' />
    </S.DecorationBase>
  );
};
