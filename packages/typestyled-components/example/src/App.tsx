import React, { Component } from 'react';
import './App.css';
import { ThemeProvider } from './theme';
import { MyStyledComponent } from './MyStyledComponent';

class App extends Component {
    render() {
        return (
            <ThemeProvider theme="default">
                <div className="App">
                    <MyStyledComponent />
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
