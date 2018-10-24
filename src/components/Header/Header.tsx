import * as React from 'react';
import styles from './Header.scss';

import PaneHeading from 'components/PaneHeading';
import StoragePanel from 'components/StoragePanel';

interface HeaderProps {
  info?: string;
  label: string;
}

const Header = (props: HeaderProps) => {
  const { label, info } = props;

  return (
    <div className={styles.component}>
      <PaneHeading label={label} info={info} />
      <StoragePanel />
    </div>
  );
};

export default Header;
