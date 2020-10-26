import * as React from 'react';

import Header from 'components/Header';
import InfoPanel from 'components/InfoPanel';
import Layout from 'components/Layout';
import Main from 'components/Main';
import MainPanel from 'components/MainPanel';
import MenuList from 'components/MenuList';
import StatusPanel from 'components/StatusPanel';

const options = [
  { label: 'Save' },
  { label: 'Load' },
  { label: 'Settings' },
  { label: 'Controls' },
  { label: 'Network' },
  { label: 'Play Records' },
  { label: 'Return to Title Screen' },
];

const SystemPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <Main>
        <Header label='System' />
        <MainPanel>
          <MenuList options={options} />
          <StatusPanel />
        </MainPanel>
      </Main>
      <InfoPanel label='Change equipped weapons' />
    </Layout>
  );
};

export default SystemPage;
