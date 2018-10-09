import * as React from 'react';
import styles from './InfoPanel.scss';

import Lines from 'components/Lines';

interface InfoPanelProps {
  label: string;
}

const InfoPanel = (props: InfoPanelProps) => {
  return (
    <div className={styles.component}>
      <div className={styles.panel}>
        <Lines isDark={true} />
        <div className={styles.label}>
          {props.label}
        </div>
        <div className={styles.buttons}>buttons</div>
      </div>
    </div>
  );
};

export default InfoPanel;
