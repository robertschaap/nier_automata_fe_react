import React from 'react';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Main } from 'components/Main';
import { MenuList } from 'components/MenuList';
import { StatusPanel } from 'components/StatusPanel';

const items = [
  { label: 'Save', isDisabled: true },
  { label: 'Load', isDisabled: true },
  { label: 'Settings' },
  { label: 'Controls' },
  { label: 'Network' },
  { label: 'Play Records' },
  { label: 'Return to Title Screen' },
];

export const SystemPageContainer: React.FC = () => {
  return (
    <>
      <Header title="System" />
      <Main spacing="space-between">
        <MenuList items={items} />
        <StatusPanel />
      </Main>
      <Footer text="Load game, save game, or change system settings." />
    </>
  );
};
