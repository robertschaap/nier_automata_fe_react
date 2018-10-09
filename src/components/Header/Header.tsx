import * as React from 'react';
import styles from './Header.scss';

import PaneHeading from 'components/PaneHeading';

interface HeaderProps {
  info?: string;
  label: string;
}

const Header = (props: HeaderProps) => {
  const { label, info } = props;

  return (
    <div className={styles.component}>
      <PaneHeading label={label} info={info} />
    </div>
  );
};

export default Header;
