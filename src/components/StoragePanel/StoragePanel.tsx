import * as React from 'react';
import styles from './StoragePanel.scss';

interface StoragePanelProps {
  storageCapacity?: number;
  storageUsed?: number;
}

const StoragePanel: React.FunctionComponent<StoragePanelProps> = (props: StoragePanelProps) => {
  const {
    storageCapacity = 128,
    storageUsed = 128,
  } = props;

  return (
    <div className={styles.component}>
      Storage Used: {storageUsed}/{storageCapacity}
    </div>
  );
};

export default StoragePanel;
