import React from 'react';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

export const ItemsPageContainer: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Header title="Items" />
      <div>ItemsPage</div>
      <Footer text="View or use items in your inventory." />
    </div>
  );
};
