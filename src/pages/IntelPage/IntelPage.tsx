import * as React from 'react';

import Header from 'components/Header';
import InfoPanel from 'components/InfoPanel';
import Layout from 'components/Layout';
import Main from 'components/Main';
import MainPanel from 'components/MainPanel';
import MenuList from 'components/MenuList';
import StatusPanel from 'components/StatusPanel';

const options = [
  { label: 'Archives' },
  { label: 'Unit Data' },
  { label: 'Tutorials' },
  { label: 'Weapon Stories' },
  { label: 'Picture Books' },
  { label: 'Fishing Encyclopedia' },
  { label: 'Novel' },
];

const IntelPage = () => {
  return (
    <Layout>
      <Main>
        <Header label='Intel' />
        <MainPanel>
          <MenuList options={options} />
          <StatusPanel />
        </MainPanel>
      </Main>
      <InfoPanel label='Change equipped weapons' />
    </Layout>
  );
};

export default IntelPage;
