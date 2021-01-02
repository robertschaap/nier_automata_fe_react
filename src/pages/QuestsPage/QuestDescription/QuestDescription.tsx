import React from 'react';

import * as S from './quest-description.styles';

export const QuestDescription: React.FC = () => {
  return (
    <S.QuestDescriptionBase>
      <S.Header>Jean Paul's Melancholy</S.Header>
      <div>Client: Jean Paul</div>
      <div>Description</div>
    </S.QuestDescriptionBase>
  );
};
