import * as React from 'react';

import Header from 'components/Header';
import InfoPanel from 'components/InfoPanel';
import Main from 'components/Main';
import MainPanel from 'components/MainPanel';
import MenuList from 'components/MenuList';
import StatusPanel from 'components/StatusPanel';

const options = [
  { label: 'Active Quests' },
  { label: 'All Quests' },
  { label: 'Cleared Quests' },
];

const QuestsPage = () => {
  return (
    <>
      <Main>
        <Header label='Quests' />
        <MainPanel>
          <MenuList options={options} />
          <StatusPanel />
        </MainPanel>
      </Main>
      <InfoPanel label='Confirm quest details and objectives' />
    </>
  );
};

export default QuestsPage;
