import React from 'react';

import { QuestsPage } from './QuestsPage';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { PageHeader } from 'components/PageHeader';

export const QuestsPageContainer: React.FC = () => {
  return (
    <>
      <Header showTitle={false} title="Quests" />
      <PageHeader title="Quests" />
      <QuestsPage />
      <Footer text="View the map or perform a quick save" />
    </>
  );
};
