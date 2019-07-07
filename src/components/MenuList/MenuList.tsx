import * as React from 'react';

import cx from 'classnames';
import styles from './MenuList.scss';

import Lines from 'components/Lines';
import MenuItem, { MenuItemProps } from 'components/MenuItem';

interface MenuListProps {
  isTopAligned?: boolean;
  options?: MenuItemProps[];
}

const MenuList = (props: MenuListProps) => {
  const { isTopAligned, options = [] } = props;

  return (
    <div className={cx(styles.component, {
      [styles.isTopAligned]: isTopAligned,
    })}>
      <div className={styles.container}>
        <div style={{ width: '66px' }}>
          <Lines />
        </div>
        <ul className={styles.list}>
          {options.map((option, index) => (
            <MenuItem
              key={index}
              completion={option.completion}
              icon={option.icon}
              label={option.label}
              to={option.to} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuList;
