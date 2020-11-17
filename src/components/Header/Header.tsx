import React from 'react';

import * as S from './header.styles';

import { Decoration } from 'components/Decoration';
import { HorizontalRule } from 'components/HorizontalRule';
import { BaseRoutesType, baseRoutes } from 'constants/routes';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  const showNavigation = true;
  const showTitle = true;

  return (
    <header>
      {showNavigation && (
        <S.Navigation>
          <S.Decoration>
            <Decoration />
          </S.Decoration>
          <S.NavItems>
            <NavItem to={baseRoutes.MAP_PAGE}>Map</NavItem>
            <NavItem to={baseRoutes.QUESTS_PAGE}>Quests</NavItem>
            <NavItem to={baseRoutes.ITEMS_PAGE}>Items</NavItem>
            <NavItem to={baseRoutes.WEAPONS_PAGE}>Weapons</NavItem>
            <NavItem to={baseRoutes.SKILLS_PAGE}>Skills</NavItem>
            <NavItem to={baseRoutes.INTEL_PAGE}>Intel</NavItem>
            <NavItem to={baseRoutes.SYSTEM_PAGE}>System</NavItem>
          </S.NavItems>
        </S.Navigation>
      )}
      <HorizontalRule />
      {showTitle && (
        <S.H1>{title}</S.H1>
      )}
    </header>
  );
};

interface NavItemProps {
  isActive?: boolean;
  children: string;
  to: BaseRoutesType;
}

const NavItem: React.FC<NavItemProps> = ({ isActive, children, to }) => {
  if (isActive) {
    return (
      <S.NavItemBase isActive>
        <S.NavItemActive>
          <S.NavItemLabel>
            <S.NavItemIcon />{children}
          </S.NavItemLabel>
        </S.NavItemActive>
      </S.NavItemBase>
    );
  }

  return (
    <S.NavItemBase>
      <S.NavItem to={to}>
        <S.NavItemBackground />
        <S.NavItemFillBar />
        <S.NavItemLabel>
          <S.NavItemIcon />{children}
        </S.NavItemLabel>
      </S.NavItem>
    </S.NavItemBase>
  );
};
