import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './header.styles';

import { Decoration } from 'components/Decoration';
import { HorizontalRule } from 'components/HorizontalRule';
import { BaseRoutesType, baseRoutes } from 'constants/routes';

// TODO: flags here are just temp, probably context+hook this since nested pages will need access
interface HeaderProps {
  showNavigation?: boolean;
  showTitle?: boolean;
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ showNavigation = true, showTitle = true, title }) => {
  const [activeRoute, setActiveRoute] = useState<BaseRoutesType | null>(null);
  const history = useHistory();

  const handleRouteChange = (to: BaseRoutesType) => {
    history.push(to);
  };

  return (
    <header>
      {showNavigation && (
        <S.Navigation>
          <S.Decoration>
            <Decoration />
          </S.Decoration>
          <S.NavItems>
            <NavItem isActive={activeRoute === baseRoutes.MAP_PAGE} onSetActiveRoute={setActiveRoute} onRouteChange={handleRouteChange} to={baseRoutes.MAP_PAGE}>Map</NavItem>
            <NavItem isActive={activeRoute === baseRoutes.QUESTS_PAGE} onSetActiveRoute={setActiveRoute} onRouteChange={handleRouteChange} to={baseRoutes.QUESTS_PAGE}>Quests</NavItem>
            <NavItem isActive={activeRoute === baseRoutes.ITEMS_PAGE} onSetActiveRoute={setActiveRoute} onRouteChange={handleRouteChange} to={baseRoutes.ITEMS_PAGE}>Items</NavItem>
            <NavItem isActive={activeRoute === baseRoutes.WEAPONS_PAGE} onSetActiveRoute={setActiveRoute} onRouteChange={handleRouteChange} to={baseRoutes.WEAPONS_PAGE}>Weapons</NavItem>
            <NavItem isActive={activeRoute === baseRoutes.SKILLS_PAGE} onSetActiveRoute={setActiveRoute} onRouteChange={handleRouteChange} to={baseRoutes.SKILLS_PAGE}>Skills</NavItem>
            <NavItem isActive={activeRoute === baseRoutes.INTEL_PAGE} onSetActiveRoute={setActiveRoute} onRouteChange={handleRouteChange} to={baseRoutes.INTEL_PAGE}>Intel</NavItem>
            <NavItem isActive={activeRoute === baseRoutes.SYSTEM_PAGE} onSetActiveRoute={setActiveRoute} onRouteChange={handleRouteChange} to={baseRoutes.SYSTEM_PAGE}>System</NavItem>
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
  children: string;
  isActive?: boolean;
  onRouteChange(to: BaseRoutesType): void;
  onSetActiveRoute(to: BaseRoutesType | null): void;
  to: BaseRoutesType;
}

const NavItem: React.FC<NavItemProps> = ({ children, isActive, onRouteChange, onSetActiveRoute, to }) => {
  if (isActive) {
    return (
      <S.NavItemBase isActive>
        <S.NavItemActive onClick={() => onSetActiveRoute(null)}>
          <S.NavItemLabel>
            <S.NavItemIcon />{children}
          </S.NavItemLabel>
        </S.NavItemActive>
      </S.NavItemBase>
    );
  }

  return (
    <S.NavItemBase>
      <S.NavItem
        to={to}
        onClick={() => onSetActiveRoute(to)}
        onMouseOver={() => onRouteChange(to)}
        onFocus={() => onRouteChange(to)}>
        <S.NavItemBackground />
        <S.NavItemFillBar />
        <S.NavItemLabel>
          <S.NavItemIcon />{children}
        </S.NavItemLabel>
      </S.NavItem>
    </S.NavItemBase>
  );
};
