import React from 'react';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Main } from 'components/Main';
import { MenuList } from 'components/MenuList';
import { StatusPanel } from 'components/StatusPanel';

const items = [
  { label: 'All Items' },
  { label: 'Restorative Items' },
  { label: 'Enhancement Items' },
  { label: 'Support Items' },
  { label: 'Materials' },
  { label: 'Key Items' },
  { label: 'Caught Fish' },
];

export const ItemsPageContainer: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Header title="Items" />
      <Main spacing="space-between">
        <MenuList items={items} />
        <StatusPanel />
      </Main>
      <Footer text="View or use items in your inventory." />
    </div>
  );
};
