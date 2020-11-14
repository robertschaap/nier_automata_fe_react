import React from 'react';

import * as S from './footer.styles';

import { HorizontalRule } from 'components/HorizontalRule';

interface FooterProps {
  text: string;
}

export const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <footer>
      <S.InfoPanel>
        <S.Decoration />
        <S.Label>
          {text}
        </S.Label>
        <S.Buttons>
          Select Contirm Back
        </S.Buttons>
      </S.InfoPanel>
      <HorizontalRule />
    </footer>
  );
};
