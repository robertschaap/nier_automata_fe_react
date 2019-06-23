import * as React from 'react';
import { Link } from 'react-router-dom';

import cx from 'classnames';
import styles from './NavItem.scss';

interface NavItemProps {
  isActive?: boolean;
  label: string | React.ReactElement<{ label: string }>;
  list?: boolean;
  to: string;
}

const NavItem = (props: NavItemProps) => {
  const { label, list, isActive, to } = props;

  return (
    <div className={cx(styles.component, { [styles.list]: list })}>
      <Link className={cx(styles.bar, { [styles.active]: isActive })} to={to}>
        <div className={styles.fill} />
        <div className={styles.label}>
          <i className={styles.icon} />
          {label}
        </div>
      </Link>
    </div>
  );
};

export default NavItem;
