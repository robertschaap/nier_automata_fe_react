import * as React from 'react';
import styles from './Header.scss';

import PaneHeading from 'components/PaneHeading';

interface HeaderProps {
  label: string;
}

const Header = (props: HeaderProps) => {
  const { label } = props;

  return (
    <div className={styles.component}>
      <PaneHeading label={label} />
    </div>
  );
};

export default Header;
