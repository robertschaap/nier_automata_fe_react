import styled, { css } from 'styled-components';

export const StatusPanelBase = styled.section`
  display: flex;
  flex-direction: column;
  width: 535px;
  background-color: ${({ theme }) => theme.color.lightest};
  letter-spacing: 2px;
`;

export const Header = styled.div`
  padding: 12px 22px;
  color: ${({ theme }) => theme.color.lightest};
  background-color: ${({ theme }) => theme.color.darkest};
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
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

export const HealthBar = styled.span<{ healthPercentage: number }>`
  display: inline-block;
  width: 182px;
  height: 12px;

  ${({ theme, healthPercentage }) => css`
    background: linear-gradient(90deg, ${theme.color.normal} ${healthPercentage}%, ${theme.color.dark} ${healthPercentage}%);
  `}

`;

export const Ailments = styled(Item)`
  padding: 16px 8px;
`;

export const Ailment = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.color.normal};
`;

export const Error = styled.div`
  flex: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 16px;
`;
