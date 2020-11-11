import React from 'react';

import { ThemeProviderContainer } from './ThemeProviderContainer';

import { ViewPort } from 'components/ViewPort';
import { MapPage } from 'pages/MapPage';

export const RootContainer: React.FC = () => {
  return (
    <ThemeProviderContainer>
      <ViewPort>
        <MapPage />
      </ViewPort>
    </ThemeProviderContainer>
  );
};
