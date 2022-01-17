'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const DarkMode = core.registerPlugin('DarkMode', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.DarkModeWeb()),
});

class DarkModeWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DarkModeWeb: DarkModeWeb
});

exports.DarkMode = DarkMode;
//# sourceMappingURL=plugin.cjs.js.map
