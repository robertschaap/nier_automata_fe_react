import styled from 'styled-components';

export const ChipContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 288px;
  height: 100%;
`;

export const Chip = styled.div<{ isSelected?: boolean; storage: number }>`
  background-color: yellow;
  flex: ${({ storage }) => storage};
  width: ${({ isSelected }) => isSelected ? 288 : 240}px;
  position: relative;
  border-bottom: 3px solid yellow;

  &:after {
    content: '';
    background-color: ${({ theme }) => theme.color.darkest};
    height: 3px;
    width: 240px;
    position: absolute;
    left: ${({ isSelected }) => isSelected && '24px'};
    bottom: -3px;
  }
`;

export const AvailableStorage = styled.div<{ storage: number }>`
  background-color: ${({ theme }) => theme.color.dark};
  width: 240px;
  flex: ${({ storage }) => storage};
`;
