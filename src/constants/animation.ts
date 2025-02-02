export enum EntryPoint {
  DRAWER = 'drawer',
  TAB = 'tab',
}

export const ANIMATION = {
  TRANSLATE_Y_VALUE: {
    [EntryPoint.DRAWER]: 60,
    [EntryPoint.TAB]: 100,
  },
  TRANSLATE_X_VALUE: {
    [EntryPoint.DRAWER]: 0,
    [EntryPoint.TAB]: 250,
  },
  DURATION: 500,
  BORDER_RADIUS: 24,
} as const;
