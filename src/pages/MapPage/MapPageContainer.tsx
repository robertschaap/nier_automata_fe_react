import React from 'react';
import styled from 'styled-components';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

const Main = styled.main`
  display: flex;

  div:first-child {
    flex: 1 1 0;
    border: 1px solid hotpink;
    background-color: #eee;
  }

  div {
    flex: 2 2 0;
    border: 1px solid hotpink;
    background-color: #eee;
  }
`;

export const MapPageContainer: React.FC = () => {
  return (
    <>
      <Header title="Map" />
      <Main>
        <div>Items</div>
        <div>Map</div>
      </Main>
      <Footer />
    </>
  );
};
