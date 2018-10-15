import * as React from 'react';

import AilmentsPanel from 'components/AilmentsPanel';
import Divider from 'components/Divider';
import PanelWithHeader from 'components/PanelWithHeader';
import TextCentered from 'components/TextCentered';
import TextJustify from 'components/TextJustify';

const StatusPanel = () => {
  return (
    <PanelWithHeader headerLabel='Status'>
      <TextJustify left='2B' right='LV : 98' />
      <Divider />
      <TextJustify left='Funds (G):' right='2,535,364' />
      <TextJustify left='EXP' right='1234' />
      <TextJustify left='HP' right='1234' />
      <TextJustify left='Attack (Light)' right='1234+10' />
      <TextJustify left='Attack (Heavy)' right='1234+10' />
      <TextJustify left='Ranged Attack' right='1234+10' />
      <TextJustify left='Defense' right='1234+10' />
      <AilmentsPanel />
      <Divider />
      <TextCentered label='NO ERROR' />
    </PanelWithHeader>
  );
};

export default StatusPanel;
