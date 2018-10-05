import * as React from 'react';

import styles from './Viewport.scss';

interface ViewportProps {
  scaleRatio?: number;
}

const Viewport = (props: ViewportProps) => {
  const { scaleRatio } = props;

  return (
    <div className={styles.component} style={{ transform: `translate(-50%, -50%) scale(${scaleRatio})` }}>
      Viewport
    </div>
  );
};

export default Viewport;
