import * as React from 'react';
import styles from './ItemList.scss';

import Lines from 'components/Lines';
import NavItem from 'components/NavItem';

// TODO: this is very similar to <MenuList />, refactor this once the APIs are clearer
const ItemList: React.FunctionComponent = () => {
  return (
    <div className={styles.component}>
      <div className={styles.container}>
        <div style={{ width: '58px' }}>
          <Lines />
        </div>
        <ul className={styles.list}>
          <NavItem label='Small Recovery' to='#' list={true} />
          <NavItem label='Medium Recovery' to='#' list={true} />
          <NavItem label='Large Recovery' to='#' list={true} />
          <NavItem label='Full Recovery' to='#' list={true} />
          <NavItem label='Visual Cure' to='#' list={true} />
          <NavItem label='Aural Cure' to='#' list={true} />
          <NavItem label='Cure Manipulation' to='#' list={true} />
          <NavItem label='Cure All Status' to='#' list={true} />
          <NavItem label='Cure All + Heal All' to='#' list={true} />
          <NavItem label='Cure All + Heal All' to='#' list={true} />
          <NavItem label='Cure All + Heal All' to='#' list={true} />
          <NavItem label='Cure All + Heal All' to='#' list={true} />
        </ul>
      </div>
    </div>
  );
};

export default ItemList;
