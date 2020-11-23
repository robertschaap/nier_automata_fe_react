import React from 'react';

import { Map } from '../Map';

import * as S from './map-page.styles';

import { Main } from 'components/Main';
import { MenuList } from 'components/MenuList';

const items = [
  { label: 'Quick Save', isDisabled: true },
  { label: 'Map Mode' },
  { label: 'Map Icons' },
];

export const MapPage: React.FC = () => {
  return (
    <Main spacing="space-between">
      <S.MenuWrapper>
        <MenuList items={items} />
        <div>
          <S.CurrentLocation>City Ruins</S.CurrentLocation>
          <S.ActiveMission>MIA</S.ActiveMission>
          <S.ActiveMissionDescription>Use your scanner to find surviving YoRHa</S.ActiveMissionDescription>
        </div>
      </S.MenuWrapper>
      <Map />
    </Main>
  );
};
