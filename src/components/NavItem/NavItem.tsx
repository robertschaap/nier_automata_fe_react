import * as React from 'react';
import { NavLink } from 'react-router-dom';

import cx from 'classnames';
import styles from './NavItem.scss';

interface NavItemProps {
  isActive?: boolean;
  label: string | React.ReactNode;
  list?: boolean;
  to: string;
}

const NavItem: React.FunctionComponent<NavItemProps> = (props: NavItemProps) => {
  const { label, list, to } = props;

  return (
    <div className={cx(styles.component, { [styles.list]: list })}>
      <NavLink className={styles.bar} activeClassName={styles.active} to={to}>
        <div className={styles.fill} />
        <div className={styles.label}>
          <i className={styles.icon} />
          {label}
        </div>
      </NavLink>
    </div>
  );
};

export default NavItem;
