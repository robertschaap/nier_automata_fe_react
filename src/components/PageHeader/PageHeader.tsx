import React from 'react';

import * as S from './page-header.styles';

import { WriteText } from 'components/WriteText';

interface PageHeaderProps {
  storage?: number;
  title: string;
  subTitle?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ storage, subTitle, title }) => {
  return (
    <S.PageHeaderBase>
      <S.H1><WriteText text={title} /></S.H1>
      {subTitle && <S.SubTitle>- {subTitle}</S.SubTitle>}
      {storage && <S.Storage>Storage Used : 119 / 128</S.Storage>}
    </S.PageHeaderBase>
  );
};
