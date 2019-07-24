import * as React from 'react';

import Header from 'components/Header';
import InfoPanel from 'components/InfoPanel';
import Layout from 'components/Layout';
import Main from 'components/Main';

const SavePage: React.FunctionComponent = () => {
  return (
    <Layout showNavigation={false}>
      <Main>
        <Header label='Save game' />
      </Main>
      <InfoPanel label='Select a file to save to' />
    </Layout>
  );
};

export default SavePage;
