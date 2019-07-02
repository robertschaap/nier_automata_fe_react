import * as React from 'react';
import styles from './Header.scss';

import PaneHeading from 'components/PaneHeading';
import StoragePanel from 'components/StoragePanel';

interface HeaderProps {
  info?: string;
  label: string;
  showStoragePanel?: boolean;
}

const Header = (props: HeaderProps) => {
  const { label, info, showStoragePanel = false } = props;

  return (
    <div className={styles.component}>
      <PaneHeading label={label} info={info} />
      {showStoragePanel && (
        <StoragePanel />
      )}
    </div>
  );
};

export default Header;
