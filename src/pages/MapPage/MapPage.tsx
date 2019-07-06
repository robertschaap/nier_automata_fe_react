import * as React from 'react';

import Header from 'components/Header';
import InfoPanel from 'components/InfoPanel';
import Main from 'components/Main';
import MainPanel from 'components/MainPanel';
import Map from 'components/Map';
import MenuList from 'components/MenuList';

const options = [
  { label: 'Quick Save' },
  { label: 'Map mode' },
  { label: 'Map Icons' },
];

const MapPage = () => {
  return (
    <>
      <Main>
        <Header label='Map' />
        <MainPanel>
          <MenuList
            isTopAligned={true}
            options={options} />
          <Map />
        </MainPanel>
      </Main>
      <InfoPanel label='View the map or perform a quick save' />
    </>
  );
};

export default MapPage;
