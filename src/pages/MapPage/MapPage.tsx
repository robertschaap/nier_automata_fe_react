import * as React from 'react';

import Header from 'components/Header';
import InfoPanel from 'components/InfoPanel';
import Main from 'components/Main';
import MainPanel from 'components/MainPanel';
import MenuList from 'components/MenuList';

const MapPage = () => {
  return (
    <>
      <Main>
        <Header label='Map' />
        <MainPanel>
          <MenuList />
        </MainPanel>
      </Main>
      <InfoPanel label='View the map or perform a quick save' />
    </>
  );
};

export default MapPage;
