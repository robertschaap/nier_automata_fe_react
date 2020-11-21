import styled from 'styled-components';

export const StatusPanelBase = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.color.lightest};
  letter-spacing: 2px;
`;

export const Header = styled.div`
  padding: 12px 22px;
  color: ${({ theme }) => theme.color.lightest};
  background-color: ${({ theme }) => theme.color.darkest};
`;

export const Items = styled.div`
  padding: 0 22px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
`;

export const Hr = styled.hr`
  margin: 4px -5px;
  height: 3px;
  border: none;
  background-color: ${({ theme }) => theme.color.normal};
`;

export const Ailments = styled(Item)`
  padding: 16px 8px;
`;

export const Ailment = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.color.normal};
`;
