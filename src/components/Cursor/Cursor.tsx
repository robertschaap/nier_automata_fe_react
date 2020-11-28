import React from 'react';
import { useTheme } from 'styled-components';

interface CursorProps {
  isActive?: boolean;
}

export const Cursor: React.FC<CursorProps> = ({ isActive }) => {
  const { color } = useTheme();

  return (
    <svg width="40" height="30">
      <path fill={isActive ? color.darkest : color.lightest} d="M12.344 6l26.485 9H39l-.085.029.085.03-.171-.001-26.485 9-12.265-9H0l.04-.029L0 15h.079l12.265-9zM10 13a2 2 0 100 4 2 2 0 000-4z" />
      <path fill={color.darkest} d="M35 0h5v5h-5zM35 25h5v5h-5z"/>
    </svg>
  );
};
