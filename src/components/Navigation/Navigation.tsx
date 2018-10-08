import * as React from 'react';
import styles from './Navigation.scss';

import Lines from 'components/Lines';
import NavItem from 'components/NavItem';

const Navigation = () => {
  return (
    <nav className={styles.component}>
      <div style={{ marginTop: '6px', height: '51px', width: '58px' }}>
        <Lines />
      </div>
      <NavItem isActive={true} label='Map' to='#' />
      <NavItem label='Quests' to='#' />
      <NavItem label='Items' to='#' />
      <NavItem label='Weapons' to='#' />
      <NavItem label='Skills' to='#' />
      <NavItem label='Intel' to='#' />
      <NavItem label='System' to='#' />
    </nav>
  );
};

export default Navigation;
