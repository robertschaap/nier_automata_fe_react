import * as React from 'react';
import styles from './MainPanel.scss';

import Lines from 'components/Lines';

const MainPanel = () => {
  return (
    <div className={styles.component}>
      <div style={{ marginTop: '51px', width: '58px' }}>
        <Lines />
      </div>
    </div>
  );
};

export default MainPanel;
