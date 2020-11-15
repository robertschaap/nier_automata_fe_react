import type { Values } from '../../types/utilities';

export const baseRoutes = {
  MAP_PAGE: '/map',
  QUESTS_PAGE: '/quests',
  ITEMS_PAGE: '/items',
  WEAPONS_PAGE: '/weapons',
  SKILLS_PAGE: '/skills',
  INTEL_PAGE: '/intel',
  SYSTEM_PAGE: '/system',
} as const;

export type BaseRoutesType = Values<typeof baseRoutes>;
