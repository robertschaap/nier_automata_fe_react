import React from 'react';

import { Footer } from 'components/Footer';
import { Main } from 'components/Main';
import { MenuList } from 'components/MenuList';
import { PageHeader } from 'components/PageHeader';
import { StatusPanel } from 'components/StatusPanel';

const items = [
  { label: 'Pod Programs', info: '88%' },
  { label: 'Plug-in Chips' },
];

export const SkillsPageContainer: React.FC = () => {
  return (
    <>
      <PageHeader title="Skills" />
      <Main spacing="space-between">
        <MenuList items={items} />
        <StatusPanel />
      </Main>
      <Footer text="Assign special abilities." />
    </>
  );
};
