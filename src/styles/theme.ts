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

/**
 * Converts a hexadecimal code to the `rgba(r,g,b,a)` format.
 * @param hexCode Hexadecimal code in either upper or lower case with hash prefix
 * @param alpha Number between 0 and 1
 */
const toRgba = (hexCode: string, alpha: number) => {
  if (hexCode.length !== 7) {
    return 'fout';
  }

  const rgb = hexCode.split('').map((c) => '0123456789abcdef'.indexOf(c.toLowerCase()));
  rgb.shift();

  if (rgb.some((e) => e === -1) || alpha < 0 || alpha > 1) {
    return null;
  }

  const r = (rgb[0] * 16) + rgb[1];
  const g = (rgb[2] * 16) + rgb[3];
  const b = (rgb[4] * 16) + rgb[5];

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const utils = {
  toRgba,
};

// section widths are either 535, 572, or
export const theme = Object.freeze({
  aspectRatio,
  color,
  utils,
});
