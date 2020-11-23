import React from 'react';

import * as S from './decoration.styles';

interface DecorationProps {
  isDark?: boolean;
}

export const Decoration: React.FC<DecorationProps> = ({ isDark }) => {
  return (
    <S.DecorationBase preserveAspectRatio="none" viewBox="0 0 25 100" isDark={isDark} width='25px' height='100%'>
      <S.Rectangle width='14' height='100%' />
      <S.Rectangle width='3' height='100%' transform='translate(22)' />
    </S.DecorationBase>
  );
};
