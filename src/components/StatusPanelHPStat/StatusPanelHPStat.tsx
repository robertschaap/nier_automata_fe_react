import * as React from 'react';

import styles from './StatusPanelHPStat.scss';

interface StatusPanelHPStatProps {
  hpCurrent: number;
  hpMaximum: number;
}

const StatusPanelHPStat = (props: StatusPanelHPStatProps) => {
  const {
    hpCurrent,
    hpMaximum,
  } = props;

  const hpBarFill = `${Math.floor(hpCurrent / hpMaximum * 100) || 0}px`;

  return (
    <div className={styles.component}>
      <span>HP:</span>
      <span className={styles.hpbar}>
        <span
          className={styles.hpcurrent}
          style={{ width: hpBarFill }} />
      </span>
      <span className={styles.stats}>
        {hpCurrent} / {hpMaximum}
      </span>
    </div>
  );
};

export default StatusPanelHPStat;
