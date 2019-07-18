import * as React from 'react';
import styles from './Navigation.scss';

import Routes from 'constants/Routes';

import Lines from 'components/Lines';
import NavItem from 'components/NavItem';

const Navigation: React.FunctionComponent = () => {
  return (
    <nav className={styles.component}>
      <div style={{ marginTop: '6px', height: '51px', width: '58px' }}>
        <Lines />
      </div>
      <NavItem isActive={true} label='Map' to={Routes.MAP} />
      <NavItem label='Quests' to={Routes.QUESTS} />
      <NavItem label='Items' to={Routes.ITEMS} />
      <NavItem label='Weapons' to={Routes.WEAPONS} />
      <NavItem label='Skills' to={Routes.SKILLS} />
      <NavItem label='Intel' to={Routes.INTEL} />
      <NavItem label='System' to={Routes.SYSTEM} />
    </nav>
  );
};

export default Navigation;
