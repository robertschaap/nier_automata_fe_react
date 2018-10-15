import * as React from 'react';
import styles from './AilmentsPanel.scss';

const AilmentsPanel = () => {
  const ailments = Array(11).fill(
    <div className={styles.ailment} />,
  );

  return (
    <div className={styles.component}>
      {ailments}
    </div>
  );
};

export default AilmentsPanel;
