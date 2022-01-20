import { registerPlugin } from '@capacitor/core';
const DarkMode = registerPlugin('DarkMode', {
    web: () => import('./web').then(m => new m.DarkModeWeb()),
});
export * from './definitions';
export { DarkMode };
//# sourceMappingURL=index.js.map