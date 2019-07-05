import * as React from 'react';

import cx from 'classnames';
import styles from './MenuList.scss';

import Lines from 'components/Lines';
import NavItem from 'components/NavItem';
import WriteText from 'components/WriteText';

interface MenuListProps {
  isTopAligned?: boolean;
}

const MenuList = (props: MenuListProps) => {
  const { isTopAligned } = props;

  return (
    <div className={cx(styles.component, {
      [styles.isTopAligned]: isTopAligned,
    })}>
      <div className={styles.container}>
        <div style={{ width: '66px' }}>
          <Lines />
        </div>
        <ul className={styles.list}>
          <NavItem label={<WriteText label='All Items' />} to='#' list={true} />
          <NavItem label={<WriteText label='Restorative Items' />} to='#' list={true} />
          <NavItem label={<WriteText label='Enhancement Items' />} to='#' list={true} />
          <NavItem label={<WriteText label='Support Items' />} to='#' list={true} />
          <NavItem label={<WriteText label='Materials' />} to='#' list={true} />
          <NavItem label={<WriteText label='Key Items' />} to='#' list={true} />
          <NavItem label={<WriteText label='Caught Items' />} to='#' list={true} />
        </ul>
      </div>
    </div>
  );
};

export default MenuList;
