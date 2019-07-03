import * as React from 'react';

import cx from 'classnames';
import styles from './MenuItem.scss';

interface MenuItemProps {
  isActive?: boolean;
  label: string | React.ReactNode;
  list?: boolean;
  to: string;
}

const MenuItem = (props: MenuItemProps) => {
  const { isActive, label, list } = props;

  return (
    <div className={cx(styles.component, { [styles.list]: list })}>
      <div className={cx(styles.bar, {
        [styles.active]: isActive,
      })}>
        <div className={styles.fill} />
        <div className={styles.label}>
          <i className={styles.icon} />
          {label}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
