import * as React from 'react';
import styles from './MainPanel.scss';

interface MainPanelProps {
  children: React.ReactNode;
}

const MainPanel: React.FunctionComponent<MainPanelProps> = (props: MainPanelProps) => {
  const { children } = props;

  return (
    <div className={styles.component}>
      {children}
    </div>
  );
};

export default MainPanel;
