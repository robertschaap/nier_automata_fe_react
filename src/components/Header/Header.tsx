import React from 'react';

import * as S from './header.styles';

import { Decoration } from 'components/Decoration';
import { HorizontalRule } from 'components/HorizontalRule';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <S.Navigation>
        <S.Decoration>
          <Decoration />
        </S.Decoration>
        <S.NavItems>
          <NavItem isActive>Map</NavItem>
          <NavItem>Quests</NavItem>
          <NavItem>Items</NavItem>
          <NavItem>Weapons</NavItem>
          <NavItem>Skills</NavItem>
          <NavItem>Intel</NavItem>
          <NavItem>System</NavItem>
        </S.NavItems>
      </S.Navigation>
      <HorizontalRule />
      <S.H1>{title}</S.H1>
    </header>
  );
};

interface NavItemProps {
  isActive?: boolean;
  children: string;
}

const NavItem: React.FC<NavItemProps> = ({ isActive, children }) => {
  return (
    <S.NavItemBase isActive={isActive}>
      <S.NavItem>
        <S.NavItemFillBar />
        <S.NavItemLabel>
          <S.NavItemIcon />{children}
        </S.NavItemLabel>
      </S.NavItem>
    </S.NavItemBase>
  );
};
