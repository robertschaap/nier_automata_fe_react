import * as React from 'react';

import Header from 'components/Header';
import InfoPanel from 'components/InfoPanel';
import MenuList from 'components/MenuList';
import Main from 'components/Main';
import MainPanel from 'components/MainPanel';

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
