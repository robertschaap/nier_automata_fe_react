import * as React from 'react';
import styles from './Lines.scss';

interface LinesProps {
  isDark?: boolean;
}

const Lines: React.FunctionComponent<LinesProps> = (props: LinesProps) => {
  const { isDark } = props;

  const fillColor =
    isDark
      ? styles.fillDark
      : styles.fill;

  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='25px' height='100%' xmlnsXlink='http://www.w3.org/1999/xlink'>
      <rect className={fillColor} width='14' height='100%' />
      <rect className={fillColor} width='3' height='100%' transform='translate(22)' />
    </svg>
  );
};

export default Lines;
