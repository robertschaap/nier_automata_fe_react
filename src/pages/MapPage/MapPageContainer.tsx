import React from 'react';

import { MapPage } from './MapPage';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

export const MapPageContainer: React.FC = () => {
  return (
    <>
      <Header title="Map" />
      <MapPage />
      <Footer />
    </>
  );
};
