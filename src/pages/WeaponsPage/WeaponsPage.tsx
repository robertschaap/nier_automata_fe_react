import * as React from 'react';

import Header from 'components/Header';
import InfoPanel from 'components/InfoPanel';
import Main from 'components/Main';
import MainPanel from 'components/MainPanel';
import MenuList from 'components/MenuList';
import StatusPanel from 'components/StatusPanel';

const options = [
  { label: 'Weapons' },
  { label: 'Weapons Set 1' },
  { label: 'Weapons Set 2' },
];

const WeaponsPage = () => {
  return (
    <>
      <Main>
        <Header label='Weapons' />
        <MainPanel>
          <MenuList options={options} />
          <StatusPanel />
        </MainPanel>
      </Main>
      <InfoPanel label='Change equipped weapons' />
    </>
  );
};

export default WeaponsPage;
