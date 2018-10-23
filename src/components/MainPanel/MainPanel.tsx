import * as React from 'react';
import styles from './MainPanel.scss';

import ItemPanel from 'components/ItemPanel';
import MenuList from 'components/MenuList';
import StatusPanel from 'components/StatusPanel';

const MainPanel = () => {
  return (
    <div className={styles.component}>
      <MenuList />
      <ItemPanel />
      <StatusPanel />
    </div>
  );
};

export default MainPanel;
