import * as React from 'react';
import styles from './MainPanel.scss';

interface MainPanelProps {
  children: React.ReactNode;
}

const MainPanel = (props: MainPanelProps) => {
  const { children } = props;

  return (
    <div className={styles.component}>
      {children}
    </div>
  );
};

export default MainPanel;
