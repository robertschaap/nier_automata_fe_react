import * as React from 'react';

import cx from 'classnames';
import styles from './NavItem.scss';

interface NavItemProps {
  isActive?: boolean;
  label: string;
  to: string;
}

const NavItem = (props: NavItemProps) => {
  const { label, isActive } = props;

  return (
    <div className={styles.component}>
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
