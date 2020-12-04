const { env } = import.meta;

export const config = Object.freeze({
  SHOW_DISTRACTIONS: env.SNOWPACK_PUBLIC_SHOW_DISTRACTIONS === 'true',
});
