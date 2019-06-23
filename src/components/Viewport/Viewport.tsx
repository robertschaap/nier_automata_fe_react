import * as React from 'react';

import styles from './Viewport.scss';

import Decoration from 'components/Decoration';
import Navigation from 'components/Navigation';

interface ViewportProps {
  scaleRatio?: number;
  children: React.ReactNode;
}

const Viewport = (props: ViewportProps) => {
  const { children, scaleRatio } = props;

  return (
    <div className={styles.component} style={{ transform: `translate(-50%, -50%) scale(${scaleRatio})` }}>
      <div className={styles.content}>
        <Navigation />
        <Decoration />
        {children}
        <Decoration />
      </div>
    </div>
  );
};

export default Viewport;
