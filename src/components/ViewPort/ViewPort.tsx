import React from 'react';

import * as S from './viewport.styles';

import { BackgroundCircle } from 'components/BackgroundCircle';

interface ViewPortProps {
  children: React.ReactNode;
}

export const ViewPort: React.FC<ViewPortProps> = ({ children }) => {
  return (
    <S.ViewPortBase>
      <S.Background>
        <S.BackgroundCircle>
          <BackgroundCircle size={1210} />
        </S.BackgroundCircle>
        <S.BackgroundCircle>
          <BackgroundCircle size={1240} />
        </S.BackgroundCircle>
        <S.BackgroundCircle bottom>
          <BackgroundCircle size={1210} />
        </S.BackgroundCircle>
        <S.BackgroundCircle bottom>
          <BackgroundCircle size={1240} />
        </S.BackgroundCircle>
      </S.Background>
      <S.Layout>
        {children}
      </S.Layout>
    </S.ViewPortBase>
  );
};
