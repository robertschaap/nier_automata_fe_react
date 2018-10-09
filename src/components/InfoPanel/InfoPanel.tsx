import * as React from 'react';
import styles from './InfoPanel.scss';

import Lines from 'components/Lines';

const InfoPanel = () => {
  return (
    <div className={styles.component}>
      <div className={styles.panel}>
        <Lines isDark={true} />
      </div>
    </div>
  );
};

export default InfoPanel;
