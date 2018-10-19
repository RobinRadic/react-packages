import React from 'react';
import PropTypes from 'prop-types';

export function createThemeProvider<THEMES, NAMES extends keyof THEMES = keyof THEMES>(themes: THEMES, defaultTheme: NAMES): React.ComponentType<{ theme: NAMES }> {

    class ThemeProvider extends React.Component<{ theme: NAMES }> {
        static displayName                       = 'ThemeProvider'
        public static readonly childContextTypes = {
            theme: PropTypes.object.isRequired
        };

        public getChildContext() {
            return {
                theme: themes[ this.props.theme ]
            };
        }

        public render(): JSX.Element | null {
            return React.Children.only(this.props.children);
        }
    }

    return ThemeProvider as React.ComponentType<{ theme: NAMES }>
}


