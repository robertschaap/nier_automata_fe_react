import React from 'react';

import * as S from './status-panel.styles';

export const StatusPanel: React.FC = () => {
  return (
    <S.StatusPanelBase>
      <S.Header>Status</S.Header>
      <S.Items>
        <S.Item><span>2B</span><span>Lv: 76</span></S.Item>
        <S.Hr />
        <S.Item><span>Funds (G):</span><span>1,238,657</span></S.Item>
        <S.Item><span>EXP:</span><span>626,978</span></S.Item>
        <S.Item><span>HP: ===--</span><span>5,765 / 7,765</span></S.Item>
        <S.Hr />
        <S.Item><span>Attack (Light):</span><span>5,953 + 1,191</span></S.Item>
        <S.Item><span>Attack (Heavy):</span><span>6,523 + 1,305</span></S.Item>
        <S.Item><span>Ranged Attack:</span><span>172 + 0</span></S.Item>
        <S.Item><span>Defense:</span><span>2,920</span></S.Item>
        <S.Ailments>
          {/* TODO: add actual ailments */}
          {Array(11).fill(0).map((_, index) => (
            <S.Ailment key={index} />
          ))}
        </S.Ailments>
        <S.Hr />
      </S.Items>
      <S.Error>No Error</S.Error>
    </S.StatusPanelBase>
  );
};
