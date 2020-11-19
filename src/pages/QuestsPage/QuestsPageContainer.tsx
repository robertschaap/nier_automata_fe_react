import React from 'react';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

export const QuestsPageContainer: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Header title="Quests" />
      <div>Page</div>
      <Footer text="View the map or perform a quick save" />
    </div>
  );
};
