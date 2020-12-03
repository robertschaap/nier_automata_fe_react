import React from 'react';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { ItemPanel } from 'components/ItemPanel';
import { Main } from 'components/Main';
import { MenuList } from 'components/MenuList';
import { PageHeader } from 'components/PageHeader';
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
    <>
      <Header showTitle={false} title="Items" />
      <PageHeader title="Items" />
      <Main spacing="space-between">
        <MenuList items={items} />
        <ItemPanel />
        <StatusPanel />
      </Main>
      <Footer text="View or use items in your inventory." />
    </>
  );
};
