import * as React from 'react';
import styles from './PaneHeading.scss';

import WriteText from 'components/WriteText';

interface PaneHeadingProps {
  info?: string;
  label: string;
}

const PaneHeading: React.FunctionComponent<PaneHeadingProps> = (props: PaneHeadingProps) => {
  const { label, info } = props;

  return (
    <div>
      <h1 className={styles.component}>
        <WriteText label={label} />
      </h1>
      {info && (
        <span> - <WriteText label={info} /></span>
      )}
    </div>
  );
};

export default PaneHeading;
