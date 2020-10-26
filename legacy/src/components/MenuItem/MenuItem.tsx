import * as React from 'react';
import { NavLink } from 'react-router-dom';

import cx from 'classnames';
import styles from './MenuItem.scss';

export interface MenuItemProps {
  completion?: string;
  icon?: string; // TODO wire
  isActive?: boolean;
  label: string | React.ReactNode;
  to?: string;
}

const MenuItem: React.FunctionComponent<MenuItemProps> = (props: MenuItemProps) => {
  const {
    isActive,
    completion,
    label,
    to,
  } = props;

  const menuItemBody = (
    <>
      <div className={styles.fill} />
      <div className={styles.label}>
        <i className={styles.icon} />
        {label}
        <span className={styles.completion}>{completion}</span>
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
