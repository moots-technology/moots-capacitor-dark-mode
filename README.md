# Moots Capacitor Dark Mode

This capacitor 3 plugin automatically changes the style of your app depending on system theme selection. If the user selects dark mode, then the app will switch to dark mode and vice versa.
In detail it enables the correct behavior of the `prefers-color-scheme` CSS media feature for the ionic [Dark Mode](https://ionicframework.com/docs/theming/dark-mode) on Android and iOS devices without the need for configuration.

# Installation

Simply install the dependency, capacitor will automatically pick up the plugin on your next `sync` command.

`npm install moots-capacitor-dark-mode`

# Explanation

By default the ionic dark mode out of the box only works on web devices, because the `prefers-color-scheme: dark` media query is not set on android and ios even if the system is set to be in dark mode.
This plugin adds the native code neccessary to read the system's theme setting and set the media query inside the app approriately.
Thus it will now match the system's selected theme. 

# About Moots
[moots technology](https://mootstech.com.au/) is an Adelaide, South Australia based consultancy and software development company with a huge expertise in usage requirements analysis and cloud architecture frameworks for creating modern software solutions. Hereby we prioritise high usability and amazing UX over adding further features.
