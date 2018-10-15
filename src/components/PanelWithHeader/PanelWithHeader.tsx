import * as React from 'react';
import styles from './PanelWithHeader.scss';

interface PanelWithHeaderProps {
  headerLabel: string;
  children: React.ReactNode;
}

const PanelWithHeader = (props: PanelWithHeaderProps) => {
  const { headerLabel, children } = props;

  return (
    <section className={styles.component}>
      <h3 className={styles.header}>
        {headerLabel}
      </h3>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
};

export default PanelWithHeader;
