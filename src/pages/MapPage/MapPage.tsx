import * as React from 'react';

import Routes from 'constants/Routes';

import Header from 'components/Header';
import InfoPanel from 'components/InfoPanel';
import Layout from 'components/Layout';
import Main from 'components/Main';
import MainPanel from 'components/MainPanel';
import Map from 'components/Map';
import MenuList from 'components/MenuList';

const options = [
  { label: 'Quick Save', to: Routes.SAVE }, // TODO setup route
  { label: 'Map mode', to: Routes.MAPVIEW }, // TODO setup route
  { label: 'Map Icons' },
];

const MapPage = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default MapPage;
