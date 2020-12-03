import React from 'react';

import { QuestsPage } from './QuestsPage';

import { Footer } from 'components/Footer';
import { PageHeader } from 'components/PageHeader';

export const QuestsPageContainer: React.FC = () => {
  return (
    <>
      <PageHeader title="Quests" />
      <QuestsPage />
      <Footer text="View the map or perform a quick save" />
    </>
  );
};
