import React from 'react';
import styled from 'styled-components';

import { Map } from '../Map';

const Main = styled.main`
  display: flex;
  flex: auto;
  margin: 50px;
  margin-top: 35px;

  > div:first-child {
    flex: 1 1 0;
    background-color: #eee;
  }

  > div {
    flex: 2 2 0;
    background-color: #eee;
  }
`;

export const MapPage: React.FC = () => {
  return (
    <Main>
      <div>
        <ul>
          <li>Quick Save</li>
          <li>Map Mode</li>
          <li>Map Icons</li>
        </ul>
        <div>
          <div>City Ruins</div>
          <div>MIA</div>
          <div>Use your scanner to find surviving YoRHa</div>
        </div>
      </div>
      <div>
        <Map />
      </div>
    </Main>
  );
};
