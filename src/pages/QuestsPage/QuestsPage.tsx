import * as React from 'react';

import Header from 'components/Header';
import InfoPanel from 'components/InfoPanel';
import Main from 'components/Main';
import MainPanel from 'components/MainPanel';
import MenuList from 'components/MenuList';
import StatusPanel from 'components/StatusPanel';

const QuestsPage = () => {
  return (
    <>
      <Main>
        <Header label='Quests' />
        <MainPanel>
          <MenuList />
          <StatusPanel />
        </MainPanel>
      </Main>
      <InfoPanel label='Change equipped weapons' />
    </>
  );
};

export default QuestsPage;
