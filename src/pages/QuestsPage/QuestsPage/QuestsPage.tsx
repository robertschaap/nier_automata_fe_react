import React from 'react';

import * as S from './quests-page.styles';

import { MenuList } from 'components/MenuList';
import { StatusPanel } from 'components/StatusPanel';

const items = [
  { label: 'Active Quests' },
  { label: 'All Quests' },
  { label: 'Cleared Quests', info: '85%' },
];

export const QuestsPage: React.FC = () => {
  return (
    <S.Main>
      <MenuList items={items} />
      <StatusPanel />
    </S.Main>
  );
};
