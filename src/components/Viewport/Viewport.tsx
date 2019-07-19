import * as React from 'react';

import cx from 'classnames';
import styles from './Viewport.scss';

interface ViewportProps {
  scaleRatio: number;
  shouldScale: boolean;
  children: React.ReactNode;
}

const Viewport: React.FunctionComponent<ViewportProps> = (props: ViewportProps) => {
  const {
    children,
    scaleRatio,
    shouldScale,
  } = props;

  const transform = shouldScale
    ? `translate(-50%, -50%) scale(${scaleRatio})`
    : '';

  return (
    <div
      className={cx(styles.component, {
        [styles.shouldScale]: shouldScale,
      })}
      style={{ transform }}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default Viewport;
