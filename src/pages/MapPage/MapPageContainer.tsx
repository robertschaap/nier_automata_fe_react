import React from 'react';

import { MapPage } from './MapPage';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { PageHeader } from 'components/PageHeader';

// TODO: the inline styles are temp, remove when there's a bit of clarity on how
// the Main component inside(?) MapPage acts and on what Footer needs
export const MapPageContainer: React.FC = () => {
  return (
    <>
      <Header showTitle={false} title="Map" />
      <PageHeader title="Map" />
      <MapPage />
      <Footer text="View the map or perform a quick-save." />
    </>
  );
};
