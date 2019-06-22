import * as React from 'react';
import styles from './MainPanel.scss';

import ItemList from 'components/ItemList';
import ItemPanel from 'components/ItemPanel';
import StatusPanel from 'components/StatusPanel';

const MainPanel = () => {
  return (
    <div className={styles.component}>
      <ItemList />
      <ItemPanel />
      <StatusPanel />
    </div>
  );
};

export default MainPanel;
