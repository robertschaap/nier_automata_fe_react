import React from 'react';

import * as S from './quests-page.styles';

import { StatusPanel } from 'components/StatusPanel';

export const QuestsPage: React.FC = () => {
  return (
    <S.Main>
      <section>
        <ul>
          <li>Save</li>
          <li>Load</li>
          <li>Settings</li>
          <li>Controls</li>
          <li>Network</li>
          <li>Play Records</li>
          <li>Return to Title Screen</li>
        </ul>
      </section>
      <section></section>
      <section>
        <StatusPanel />
      </section>
    </S.Main>
  );
};
