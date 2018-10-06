import * as React from 'react';

import styles from './Main.scss';

interface MainProps {
  children: React.ReactNode;
}

const Main = (props: MainProps) => {
  const { children } = props;

  return (
    <div className={styles.component}>
      {children}
    </div>
  );
};

export default Main;
