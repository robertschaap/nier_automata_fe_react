const aspectRatio = {
  width: 1920,
  height: 1080,
};

const color = {
  lightest: '#d8d3bb',
  light: '#cbc7b0',
  normal: '#b1ae9a',
  dark: '#625f56',
  darkest: '#4e4c44',
};

export const theme = Object.freeze({
  aspectRatio,
  color,
});

/**
 * Base styles for reference
 *
 * $text-color: $color-key-darkest;
 * $text-color-light: $color-key-lightest;
 *
 * $bg-main-color: $color-key-light;
 * $bg-light-color: $color-key-lightest;
 *
 * $navitem-color: $color-key-normal;
 * $navitem-focus-color: $color-key-darkest;
 *
 * $panel-header-bg-color: $color-key-darkest;
 *
 * $decoration-color: $color-key-darkest;
 * $lines-color: $color-key-normal;
 * $lines-color-dark: $color-key-darkest;
 */
