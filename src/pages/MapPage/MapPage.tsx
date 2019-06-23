import * as React from 'react';

import Header from 'components/Header';
import InfoPanel from 'components/InfoPanel';
import Main from 'components/Main';
import MainPanel from 'components/MainPanel';

const MapPage = () => {
  return (
    <>
      <Main>
        <Header label='Weapons' info='Weapon Set 1' />
        <MainPanel />
      </Main>
      <InfoPanel label='Change equipped weapons' />
    </>
  );
};

export default MapPage;
