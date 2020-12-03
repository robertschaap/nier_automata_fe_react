import React from 'react';

import { MapPage } from './MapPage';

import { Footer } from 'components/Footer';
import { PageHeader } from 'components/PageHeader';

// TODO: the inline styles are temp, remove when there's a bit of clarity on how
// the Main component inside(?) MapPage acts and on what Footer needs
export const MapPageContainer: React.FC = () => {
  return (
    <>
      <PageHeader title="Map" />
      <MapPage />
      <Footer text="View the map or perform a quick-save." />
    </>
  );
};
