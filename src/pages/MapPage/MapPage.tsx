import * as React from 'react';

import Header from 'components/Header';
import InfoPanel from 'components/InfoPanel';
import ItemList from 'components/ItemList';
import ItemPanel from 'components/ItemPanel';
import Main from 'components/Main';
import MainPanel from 'components/MainPanel';
import StatusPanel from 'components/StatusPanel';

const MapPage = () => {
  return (
    <>
      <Main>
        <Header label='Weapons' info='Weapon Set 1' />
        <MainPanel>
          <ItemList />
          <ItemPanel />
          <StatusPanel />
        </MainPanel>
      </Main>
      <InfoPanel label='Change equipped weapons' />
    </>
  );
};

export default MapPage;
