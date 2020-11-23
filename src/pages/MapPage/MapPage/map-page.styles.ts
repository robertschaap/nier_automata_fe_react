import styled from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CurrentLocation = styled.div`
  font-size: 20px;
  padding: 0 6px;
`;

export const ActiveMission = styled.div`
  font-size: 28px;
  width: 623px;
  padding: 16px 0;
  padding-left: 56px;
  border-top: 2px solid ${({ theme }) => theme.color.darkest};
  border-bottom: 2px solid ${({ theme }) => theme.color.darkest};
`;

export const ActiveMissionDescription = styled.div`
  padding-left: 56px;
`;
