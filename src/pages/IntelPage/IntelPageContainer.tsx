import React from 'react';

import { Footer } from 'components/Footer';
import { Main } from 'components/Main';
import { MenuList } from 'components/MenuList';
import { PageHeader } from 'components/PageHeader';
import { StatusPanel } from 'components/StatusPanel';

const items = [
  { label: 'Archives', info: '73%' },
  { label: 'Unit Data', info: '89%' },
  { label: 'Tutorials', info: '98%' },
  { label: 'Weapons Stories', info: '47%' },
  { label: 'Picture Books', info: '87%' },
  { label: 'Fishing Encyclopedia', info: '34%' },
  { label: 'Novel', info: '100%' },
];

export const IntelPageContainer: React.FC = () => {
  return (
    <>
      <PageHeader title="Intel" />
      <Main spacing="space-between">
        <MenuList items={items} />
        <StatusPanel />
      </Main>
      <Footer text="View various types of aquired data." />
    </>
  );
};
