import React, { useMemo } from 'react';

import * as S from './horizontal-rule.styles';

const Rectangle = () => (
  <svg width="11" height="4">
    <path fill="currentColor" d="M0 0h11v4H0z" />
  </svg>
);

// 23 + 1 rect

const Circles = () => (
  <svg width="23" height="19">
    <g fill="currentColor">
      <circle cx="3.5" cy="3.5" r="3.5" />
      <circle cx="19.5" cy="3.5" r="3.5" />
      <circle cx="11.5" cy="15.5" r="3.5" />
    </g>
  </svg>
);

export const HorizontalRule: React.FC = () => {
  const thing = useMemo(() => {
    return Array(47).fill(0).map((_, index) => (
      index % 2
        ? <S.Circles key={index}><Circles /></S.Circles>
        : <Rectangle key={index} />
    ));
  }, []);

  return (
    <S.HorizontalRule>
      {thing}
    </S.HorizontalRule>
  );
};
