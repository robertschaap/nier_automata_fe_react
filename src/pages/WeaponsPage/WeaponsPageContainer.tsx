import React from 'react';

import { Footer } from 'components/Footer';
import { Main } from 'components/Main';
import { MenuList } from 'components/MenuList';
import { PageHeader } from 'components/PageHeader';
import { StatusPanel } from 'components/StatusPanel';

const items = [
  { label: 'Weapons', info: '87%' },
  { label: 'Weapon Set 1' },
  { label: 'Weapon Set 2' },
];

export const WeaponsPageContainer: React.FC = () => {
  return (
    <>
      <PageHeader title="Weapons" />
      <Main spacing="space-between">
        <MenuList items={items} />
        <StatusPanel />
      </Main>
      <Footer text="Change equipped weapons" />
    </>
  );
};
