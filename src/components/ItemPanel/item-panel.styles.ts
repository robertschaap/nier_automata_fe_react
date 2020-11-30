import styled from 'styled-components';

export const ItemPanelBase = styled.section`
  display: flex;
  flex-direction: column;
  width: 535px;
  background-color: ${({ theme }) => theme.color.lightest};
`;

export const Header = styled.div`
  padding: 12px 22px;
  color: ${({ theme }) => theme.color.lightest};
  background-color: ${({ theme }) => theme.color.darkest};
`;

export const Item = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;
  padding: 22px;
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 265px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.lightest};
  background-color: ${({ theme }) => theme.color.normal};
`;

export const Hr = styled.hr`
  margin-top: 16px;
  width: 100%;
  height: 3px;
  border: none;
  background-color: ${({ theme }) => theme.color.normal};
`;

export const Description = styled.div`
  flex: auto;
`;

export const ItemCount = styled.div`
  text-align: right;
`;
