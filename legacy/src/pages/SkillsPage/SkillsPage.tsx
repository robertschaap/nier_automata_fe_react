import * as React from 'react';

import Header from 'components/Header';
import InfoPanel from 'components/InfoPanel';
import Layout from 'components/Layout';
import Main from 'components/Main';
import MainPanel from 'components/MainPanel';
import MenuList from 'components/MenuList';
import StatusPanel from 'components/StatusPanel';

const options = [
  { label: 'Pod Programs', completion: '88%' },
  { label: 'Plug-In Chips' },
];

const SkillsPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <Main>
        <Header label='Skills' />
        <MainPanel>
          <MenuList options={options} />
          <StatusPanel />
        </MainPanel>
      </Main>
      <InfoPanel label='Change equipped weapons' />
    </Layout>
  );
};

export default SkillsPage;
