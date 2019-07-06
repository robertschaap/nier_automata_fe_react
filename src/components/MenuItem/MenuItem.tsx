import * as React from 'react';

import cx from 'classnames';
import styles from './MenuItem.scss';

export interface MenuItemProps {
  icon?: string; // TODO wire
  isActive?: boolean;
  label: string | React.ReactNode;
  to?: string; // TODO wire
}

const MenuItem = (props: MenuItemProps) => {
  const { isActive, label } = props;

  return (
    <div className={styles.component}>
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
