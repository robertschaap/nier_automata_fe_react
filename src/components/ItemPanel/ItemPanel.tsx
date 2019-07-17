import * as React from 'react';

import Divider from 'components/Divider';
import FlexAuto from 'components/FlexAuto';
import ItemImage from 'components/ItemImage';
import PanelWithHeader from 'components/PanelWithHeader';
import TextJustify from 'components/TextJustify';

// TODO: check bottom padding on last text element
const ItemPanel: React.FunctionComponent = () => {
  return (
    <PanelWithHeader headerLabel='Small Recovery'>
      <ItemImage />
      <Divider />
      <TextJustify left='Restores 25% of HP' />
      <FlexAuto />
      <TextJustify right='Number Held: 95 / 99' />
    </PanelWithHeader>
  );
};

export default ItemPanel;
