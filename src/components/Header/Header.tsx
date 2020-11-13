import React from 'react';

import * as S from './header.styles';

import { HorizontalRule } from 'components/HorizontalRule';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <S.Navigation>
        <S.Decoration />
        <S.NavItems>
          <S.NavItem isActive>Map</S.NavItem>
          <S.NavItem>Quests</S.NavItem>
          <S.NavItem>Items</S.NavItem>
          <S.NavItem>Weapons</S.NavItem>
          <S.NavItem>Skills</S.NavItem>
          <S.NavItem>Intel</S.NavItem>
          <S.NavItem>System</S.NavItem>
        </S.NavItems>
      </S.Navigation>
      <HorizontalRule />
      <S.H1>{title}</S.H1>
    </header>
  );
};
