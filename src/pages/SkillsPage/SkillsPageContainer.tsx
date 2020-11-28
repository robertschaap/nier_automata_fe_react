import React from 'react';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Main } from 'components/Main';
import { MenuList } from 'components/MenuList';
import { StatusPanel } from 'components/StatusPanel';

const items = [
  { label: 'Pod Programs', info: '88%' },
  { label: 'Plug-in Chips' },
];

export const SkillsPageContainer: React.FC = () => {
  return (
    <>
      <Header title="Skills" />
      <Main spacing="space-between">
        <MenuList items={items} />
        <StatusPanel />
      </Main>
      <Footer text="Assign special abilities." />
    </>
  );
};
