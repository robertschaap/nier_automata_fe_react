import * as React from 'react';
import { NavLink } from 'react-router-dom';

import cx from 'classnames';
import styles from './MenuItem.scss';

export interface MenuItemProps {
  icon?: string; // TODO wire
  isActive?: boolean;
  label: string | React.ReactNode;
  to?: string;
}

const MenuItem = (props: MenuItemProps) => {
  const {
    isActive,
    label,
    to,
  } = props;

  const menuItemBody = (
    <>
      <div className={styles.fill} />
      <div className={styles.label}>
        <i className={styles.icon} />
        {label}
      </div>
    </>
  );

  if (to) {
    return (
      <div className={styles.component}>
        <NavLink className={styles.bar} activeClassName={styles.isActive} to={to}>
          {menuItemBody}
        </NavLink>
      </div>
    );
  }

  return (
    <div className={styles.component}>
      <div className={cx(styles.bar, {
        [styles.active]: isActive,
      })}>
        {menuItemBody}
      </div>
    </div>
  );
};

export default MenuItem;
