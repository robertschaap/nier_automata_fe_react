import * as React from 'react';

import Header from 'components/Header';
import InfoPanel from 'components/InfoPanel';
import ItemPanel from 'components/ItemPanel';
import Main from 'components/Main';
import MainPanel from 'components/MainPanel';
import MenuList from 'components/MenuList';
import StatusPanel from 'components/StatusPanel';

const WeaponsPage = () => {
  return (
    <>
      <Main>
        <Header label='Weapons' info='Weapon Set 1' />
        <MainPanel>
          <MenuList />
          <ItemPanel />
          <StatusPanel />
        </MainPanel>
      </Main>
      <InfoPanel label='Change equipped weapons' />
    </>
  );
};

export default WeaponsPage;
