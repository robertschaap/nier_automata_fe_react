import React from 'react';

import * as S from './page-header.styles';

import { WriteText } from 'components/WriteText';

interface PageHeaderProps {
  storage?: {
    available: number;
    used: number;
  };
  title: string;
  subTitle?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ storage, subTitle, title }) => {
  return (
    <S.PageHeaderBase>
      <S.H1><WriteText text={title} /></S.H1>
      {subTitle && <S.SubTitle>- <WriteText text={subTitle} /></S.SubTitle>}
      {storage && <S.Storage>Storage Used : {storage.used} / {storage.available}</S.Storage>}
    </S.PageHeaderBase>
  );
};
