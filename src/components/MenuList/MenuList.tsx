import * as React from 'react';
import styles from './MenuList.scss';

import Lines from 'components/Lines';
import NavItem from 'components/NavItem';

const MenuList = () => {
  return (
    <div className={styles.component}>
      <div className={styles.container}>
        <div style={{ width: '58px' }}>
          <Lines />
        </div>
        <ul className={styles.list}>
          <NavItem label='All Items' to='#' list={true} />
          <NavItem label='Restorative Items' to='#' list={true} />
          <NavItem label='Enhancement Items' to='#' list={true} />
          <NavItem label='Support Items' to='#' list={true} />
          <NavItem label='Materials' to='#' list={true} />
          <NavItem label='Key Items' to='#' list={true} />
          <NavItem label='Caught Items' to='#' list={true} />
        </ul>
      </div>
    </div>
  );
};

export default MenuList;
