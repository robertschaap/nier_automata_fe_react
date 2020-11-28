import React from 'react';

import * as S from './viewport.styles';

interface ViewPortProps {
  children: React.ReactNode;
}

export const ViewPort: React.FC<ViewPortProps> = ({ children }) => {
  return (
    <S.ViewPortBase>
      {children}
    </S.ViewPortBase>
  );
};
