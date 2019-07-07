import * as React from 'react';

import Header from 'components/Header';
import InfoPanel from 'components/InfoPanel';
import ItemPanel from 'components/ItemPanel';
import Layout from 'components/Layout';
import Main from 'components/Main';
import MainPanel from 'components/MainPanel';
import MenuList from 'components/MenuList';
import StatusPanel from 'components/StatusPanel';

const options = [
  { label: 'All Items' },
  { label: 'Restorative Items' },
  { label: 'Enhancement Items' },
  { label: 'Support Items' },
  { label: 'Materials' },
  { label: 'Key Items' },
  { label: 'Caught Fish' },
];

const ItemsPage = () => {
  return (
    <Layout>
      <Main>
        <Header label='Items' />
        <MainPanel>
          <MenuList options={options} />
          <ItemPanel />
          <StatusPanel />
        </MainPanel>
      </Main>
      <InfoPanel label='View or use items in your inventory' />
    </Layout>
  );
};

export default ItemsPage;
