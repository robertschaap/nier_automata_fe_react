import styled from 'styled-components';

export const MapBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.normal};
`;

export const Message = styled.p`
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 16px;
`;
