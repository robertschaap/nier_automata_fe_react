import * as React from 'react';

import styles from './Layout.scss';

import Decoration from 'components/Decoration';
import Navigation from 'components/Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div className={styles.content}>
      <Navigation />
      <Decoration />
      {children}
      <Decoration />
    </div>
  );
};

export default Layout;
