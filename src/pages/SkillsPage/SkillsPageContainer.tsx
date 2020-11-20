import React from 'react';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

export const SkillsPageContainer: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Header title="Skills" />
      <div>SkillsPage</div>
      <Footer text="Assign special abilities." />
    </div>
  );
};
