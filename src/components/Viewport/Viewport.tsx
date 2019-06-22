import * as React from 'react';

import styles from './Viewport.scss';

import Decoration from 'components/Decoration';
import Header from 'components/Header';
import InfoPanel from 'components/InfoPanel';
import Main from 'components/Main';
import MainPanel from 'components/MainPanel';
import Navigation from 'components/Navigation';

interface ViewportProps {
  scaleRatio?: number;
}

const Viewport = (props: ViewportProps) => {
  const { scaleRatio } = props;

  return (
    <div className={styles.component} style={{ transform: `translate(-50%, -50%) scale(${scaleRatio})` }}>
      <div className={styles.content}>
        <Navigation />
        <Decoration />
        <Main>
          <Header label='Weapons' info='Weapon Set 1' />
          <MainPanel />
        </Main>
        <InfoPanel label='Change equipped weapons' />
        <Decoration />
      </div>
    </div>
  );
};

export default Viewport;
