package com.bkon.capacitor.DarkMode;

import android.content.res.Configuration;
import com.getcapacitor.Plugin;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "DarkMode")
public class DarkModePlugin extends Plugin {

    private DarkMode implementation;

    @Override
    public void load() {
        implementation = new DarkMode(getContext(), getBridge());
        implementation.syncDarkMode();
    }

    @Override
    public void handleOnConfigurationChanged(Configuration newConfig) {
        super.handleOnConfigurationChanged(newConfig);
        implementation.syncDarkMode();
    }
}
