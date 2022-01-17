import { registerPlugin } from '@capacitor/core';
const DarkMode = registerPlugin('DarkMode', {
    web: () => import('./web').then(m => new m.DarkModeWeb()),
});
export { DarkMode };
//# sourceMappingURL=index.js.map