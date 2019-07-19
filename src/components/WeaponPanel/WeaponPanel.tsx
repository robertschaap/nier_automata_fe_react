import * as React from 'react';

import Divider from 'components/Divider';
import FlexAuto from 'components/FlexAuto';
import PanelWithHeader from 'components/PanelWithHeader';
import TextJustify from 'components/TextJustify';
import WeaponImage from 'components/WeaponImage';

const WeaponPanel: React.FunctionComponent = () => {
  return (
    <PanelWithHeader headerLabel='Bare Fists Lv: 3'>
      <WeaponImage />
      <TextJustify left='Unarmed' />
      <Divider />
      <TextJustify left='Attack: 100 - 100' />
      <TextJustify left='Combo: Lt 4 Hv 1' />
      <TextJustify left='. -' />
      <TextJustify left='. -' />
      <FlexAuto />
    </PanelWithHeader>
  );
};

export default WeaponPanel;
