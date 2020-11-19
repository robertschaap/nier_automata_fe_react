import React from 'react';

import * as S from './footer.styles';

import { Decoration } from 'components/Decoration';
import { HorizontalRule } from 'components/HorizontalRule';

interface FooterProps {
  text: string;
}

export const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <footer>
      <S.InfoPanelWrapper>
        <S.InfoPanel>
          <S.Decoration>
            <Decoration isDark />
          </S.Decoration>
          <S.Label>
            {text}
          </S.Label>
          <S.Buttons>
            WASD-Select K-Confirm L-Back
          </S.Buttons>
        </S.InfoPanel>
      </S.InfoPanelWrapper>
      <HorizontalRule />
    </footer>
  );
};
