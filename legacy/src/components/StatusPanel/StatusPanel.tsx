import * as React from 'react';

import AilmentsPanel from 'components/AilmentsPanel';
import Divider from 'components/Divider';
import PanelWithHeader from 'components/PanelWithHeader';
import StatusPanelHPStat from 'components/StatusPanelHPStat';
import TextCentered from 'components/TextCentered';
import TextJustify from 'components/TextJustify';

const StatusPanel: React.FunctionComponent = () => {
  return (
    <PanelWithHeader headerLabel='Status'>
      <TextJustify left='2B' right='Lv : 76' />
      <Divider />
      <TextJustify left='Funds (G):' right='2,535,364' />
      <TextJustify left='EXP:' right='626,978' />
      <StatusPanelHPStat hpCurrent={4265} hpMaximum={7765} />
      <TextJustify left='Attack (Light):' right='5953 + 1191' />
      <TextJustify left='Attack (Heavy):' right='6523 + 1305' />
      <TextJustify left='Ranged Attack:' right='127 + 0' />
      <TextJustify left='Defense:' right='2920' />
      <AilmentsPanel />
      <Divider />
      <TextCentered label='NO ERROR' />
    </PanelWithHeader>
  );
};

export default StatusPanel;
