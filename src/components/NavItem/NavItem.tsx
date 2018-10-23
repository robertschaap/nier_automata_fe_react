import * as React from 'react';

import cx from 'classnames';
import styles from './NavItem.scss';

interface NavItemProps {
  isActive?: boolean;
  label: string;
  list?: boolean;
  to: string;
}

const NavItem = (props: NavItemProps) => {
  const { label, list, isActive } = props;

  return (
    <div className={cx(styles.component, { [styles.list]: list })}>
      <div className={cx(styles.bar, { [styles.active]: isActive })}>
        <div className={styles.fill} />
        <div className={styles.label}>
          <i className={styles.icon} />
          {label}
        </div>
      </div>
    </div>
  );
};

export default NavItem;
