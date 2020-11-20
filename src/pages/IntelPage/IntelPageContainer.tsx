import React from 'react';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

export const IntelPageContainer: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Header title="Intel" />
      <div>ItemsPage</div>
      <Footer text="View various types of aquired data." />
    </div>
  );
};
