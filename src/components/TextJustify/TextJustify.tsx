import * as React from 'react';

import styles from './TextJustify.scss';

interface TextJustifyProps {
  left?: string;
  right?: string;
}

const TextJustify = (props: TextJustifyProps) => {
  const { left, right } = props;

  return (
    <div className={styles.component}>
      <span>{left}</span>
      <span>{right}</span>
    </div>
  );
};

export default TextJustify;
