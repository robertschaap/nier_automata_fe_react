import React from 'react';

import * as S from './footer.styles';

import { HorizontalRule } from 'components/HorizontalRule';

interface FooterProps {
  text?: string;
}

export const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <footer>
      <S.InfoPanel>{text ?? 'footer'}</S.InfoPanel>
      <HorizontalRule />
    </footer>
  );
};
