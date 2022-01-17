import { registerPlugin } from '@capacitor/core';
import { DarkModePlugin } from './definitions';

const DarkMode = registerPlugin<DarkModePlugin>('DarkMode', {
  web: () => import('./web').then(m => new m.DarkModeWeb()),
});

export * from './definitions';
export { DarkMode };
