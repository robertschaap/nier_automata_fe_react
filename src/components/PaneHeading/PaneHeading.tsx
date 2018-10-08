import * as React from 'react';
import styles from './PaneHeading.scss';

import WriteText from 'components/WriteText';

interface PaneHeadingProps {
  label: string;
}

const PaneHeading = (props: PaneHeadingProps) => {
  const { label } = props;
  return (
    <h1 className={styles.component}>
      <WriteText label={label} />
    </h1>
  );
};

export default PaneHeading;
