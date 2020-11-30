import React from 'react';

import * as S from './viewport.styles';

import { BackgroundCircle } from 'components/BackgroundCircle';
import { BackgroundLine } from 'components/BackgroundLine';
import { config } from 'utils/config';

interface ViewPortProps {
  children: React.ReactNode;
}

export const ViewPort: React.FC<ViewPortProps> = ({ children }) => {
  return (
    <S.ViewPortBase>
      <S.Background>
        {config.SHOW_DISTRACTIONS && (
          <>
            <S.BackgroundCircle>
              <BackgroundCircle size={1210} />
            </S.BackgroundCircle>
            <S.BackgroundCircle>
              <BackgroundCircle size={1240} />
            </S.BackgroundCircle>
            <S.BackgroundLine offsetX={-12} offsetY={-3}>
              <BackgroundLine />
            </S.BackgroundLine>
            <S.BackgroundLine>
              <BackgroundLine />
            </S.BackgroundLine>
            <S.BackgroundLine offsetX={-11} offsetY={-20}>
              <BackgroundLine />
            </S.BackgroundLine>
            <S.BackgroundCircle bottom>
              <BackgroundCircle size={1210} />
            </S.BackgroundCircle>
            <S.BackgroundCircle bottom>
              <BackgroundCircle size={1240} />
            </S.BackgroundCircle>
            <S.BackgroundLine bottom offsetX={3} offsetY={12}>
              <BackgroundLine />
            </S.BackgroundLine>
            <S.BackgroundLine bottom>
              <BackgroundLine />
            </S.BackgroundLine>
            <S.BackgroundLine bottom offsetX={23} offsetY={15}>
              <BackgroundLine />
            </S.BackgroundLine>
          </>
        )}
      </S.Background>
      <S.Layout>
        {children}
      </S.Layout>
      {config.SHOW_DISTRACTIONS && (
        <>
          <S.ForegroundRadial />
          <S.ForegroundOverlay />
        </>
      )}
    </S.ViewPortBase>
  );
};
