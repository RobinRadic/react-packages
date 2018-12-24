import React from 'react';
export declare function createThemeProvider<THEMES, NAMES extends keyof THEMES = keyof THEMES>(themes: THEMES, defaultTheme: NAMES): React.ComponentType<{
    theme: NAMES;
}>;
