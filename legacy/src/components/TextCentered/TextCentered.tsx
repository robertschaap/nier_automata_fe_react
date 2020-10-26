import * as React from 'react';
import styles from './TextCentered.scss';

interface TextCenteredProps {
  label: string;
}

const TextCentered: React.FunctionComponent<TextCenteredProps> = (props: TextCenteredProps) => {
  const { label } = props;

  return (
    <div className={styles.component}>{label}</div>
  );
};

export default TextCentered;
