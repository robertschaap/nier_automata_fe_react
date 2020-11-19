import React from 'react';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

export const SystemPageContainer: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Header title="System" showNavigation={false} />
      <div>SystemPage</div>
      <Footer text="Load game, save game, or change system settings" />
    </div>
  );
};
