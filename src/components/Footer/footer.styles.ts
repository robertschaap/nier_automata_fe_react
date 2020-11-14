import styled from 'styled-components';

export const InfoPanel = styled.div`
  display: flex;
  align-items: center;
  margin: 0 50px;
  height: 80px;
  background-color: ${({ theme }) => theme.color.lightest};
  box-shadow: 3px 3px ${({ theme }) => theme.color.normal};
`;

export const Label = styled.div`
  flex: auto;
`;

export const Decoration = styled.div`
  background-color: hotpink;
  width: 25px;
  height: 100%;
  margin-right: 35px;
`;

export const Buttons = styled.div`
  padding-right: 35px;
`;
