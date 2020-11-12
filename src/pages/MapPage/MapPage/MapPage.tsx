import React from 'react';
import styled from 'styled-components';

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

export const MapPage: React.FC = () => {
  return (
    <Main>
      <div>Items</div>
      <div>Map</div>
    </Main>
  );
};
