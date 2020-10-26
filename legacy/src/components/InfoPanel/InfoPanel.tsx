import * as React from 'react';
import styles from './InfoPanel.scss';

import Lines from 'components/Lines';

interface InfoPanelProps {
  label: string;
}

const InfoPanel: React.FunctionComponent<InfoPanelProps> = (props: InfoPanelProps) => {
  return (
    <footer className={styles.component}>
      <div className={styles.panel}>
        <Lines isDark={true} />
        <div className={styles.label}>
          {props.label}
        </div>
        <div className={styles.buttons}>Select Confirm Back</div>
      </div>
    </footer>
  );
};

export default InfoPanel;
