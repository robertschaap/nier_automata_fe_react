import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './header.styles';

import { Decoration } from 'components/Decoration';
import { HorizontalRule } from 'components/HorizontalRule';
import { PageHeader } from 'components/PageHeader';
import { BaseRoutesType, baseRoutes } from 'constants/routes';

const navItems = [
  { to: baseRoutes.MAP_PAGE, label: 'Map' },
  { to: baseRoutes.QUESTS_PAGE, label: 'Quests' },
  { to: baseRoutes.ITEMS_PAGE, label: 'Items' },
  { to: baseRoutes.WEAPONS_PAGE, label: 'Weapons' },
  { to: baseRoutes.SKILLS_PAGE, label: 'Skills' },
  { to: baseRoutes.INTEL_PAGE, label: 'Intel' },
  { to: baseRoutes.SYSTEM_PAGE, label: 'System' },
];

// TODO: flags here are just temp, probably context+hook this since nested pages will need access
interface HeaderProps {
  showNavigation?: boolean;
  showTitle?: boolean;
  subTitle?: string;
  title: string;
  // TODO: pass proper object later
  storage?: number;
}

export const Header: React.FC<HeaderProps> = ({ showNavigation = true, showTitle = true, subTitle, storage, title }) => {
  const [activeRoute, setActiveRoute] = useState<BaseRoutesType | null>(null);
  const history = useHistory();

  const onRouteChange = useCallback((route: BaseRoutesType) => () => {
    activeRoute !== route && history.push(route);
  }, []);

  const onSetActiveRoute = (route: BaseRoutesType) => () => {
    activeRoute === route
      ? setActiveRoute(null)
      : setActiveRoute(route);
  };

  return (
    <header>
      {showNavigation && (
        <S.Navigation>
          <S.Decoration>
            <Decoration />
          </S.Decoration>
          <S.NavItems>
            {navItems.map(({ to, label }) => (
              <NavItem
                key={to}
                isActive={activeRoute === to}
                onSetActiveRoute={onSetActiveRoute(to)}
                onRouteChange={onRouteChange(to)}
                to={to}>
                {label}
              </NavItem>
            ))}
          </S.NavItems>
        </S.Navigation>
      )}
      <HorizontalRule />
      {showTitle && (
        <PageHeader
          storage={storage}
          subTitle={subTitle}
          title={title} />
      )}
    </header>
  );
};

interface NavItemProps {
  children: string;
  isActive?: boolean;
  onRouteChange(): void;
  onSetActiveRoute(): void;
  to: BaseRoutesType;
}

const NavItem: React.FC<NavItemProps> = ({ children, isActive, onRouteChange, onSetActiveRoute, to }) => {
  if (isActive) {
    return (
      <S.NavItemBase isActive>
        <S.NavItemActive onClick={onSetActiveRoute}>
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
        onClick={onSetActiveRoute}
        onMouseOver={onRouteChange}
        onFocus={onRouteChange}>
        <S.NavItemBackground />
        <S.NavItemFillBar />
        <S.NavItemLabel>
          <S.NavItemIcon />{children}
        </S.NavItemLabel>
      </S.NavItem>
    </S.NavItemBase>
  );
};
