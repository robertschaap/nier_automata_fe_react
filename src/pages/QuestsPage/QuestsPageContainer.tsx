import React from 'react';

import { QuestsPage } from './QuestsPage';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

export const QuestsPageContainer: React.FC = () => {
  return (
    <>
      <Header title="Quests" />
      <QuestsPage />
      <Footer text="View the map or perform a quick save" />
    </>
  );
};
