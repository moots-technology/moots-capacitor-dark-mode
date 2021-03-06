import { WebPlugin } from '@capacitor/core';
export class DarkModeWeb extends WebPlugin {
    constructor() {
        super({
            name: 'DarkMode',
            platforms: ['web', 'android', 'ios'],
        });
        this.darkMode = { "isDarkModeOn": false };
    }
    isDarkModeOn() {
        var darkMode = { "isDarkModeOn": false };
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            darkMode.isDarkModeOn = true;
        }
        return Promise.resolve(darkMode);
    }
    registerDarkModeChangeListener() {
        var darkMode = { "isDarkModeOn": false };
        window.matchMedia("(prefers-color-scheme: dark)").addListener((status) => {
            if (status.matches) {
                darkMode = { "isDarkModeOn": true };
            }
            else {
                darkMode = { "isDarkModeOn": false };
            }
            this.notifyListeners("darkModeStateChanged", darkMode);
        });
    }
}
//# sourceMappingURL=web.js.map