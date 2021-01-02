import styled from 'styled-components';

export const QuestDescriptionBase = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.lightest};
  width: 870px;
`;

export const Header = styled.div`
  padding: 12px 22px;
  background-color: ${({ theme }) => theme.color.normal};
`;
