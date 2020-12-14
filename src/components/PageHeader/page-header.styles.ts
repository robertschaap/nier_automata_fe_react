import styled from 'styled-components';

export const PageHeaderBase = styled.div`
  padding: 0 50px;
  display: flex;
  align-items: flex-end;
`;

export const H1 = styled.h1`
  text-transform: uppercase;
  letter-spacing: 16px;
  font-size: 50px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 22px;
  text-shadow: 6px 6px ${({ theme }) => theme.color.normal};
`;

export const SubTitle = styled.span`
  margin-bottom: 22px;
`;

export const Storage = styled.div`
  background-color: ${({ theme }) => theme.color.lightest};
  border-left: 10px solid ${({ theme }) => theme.color.darkest};
  padding: 8px 16px;
  justify-self: flex-end;
  width: 535px;
  margin-left: auto;
`;
