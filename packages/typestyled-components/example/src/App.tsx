import React, { Component } from 'react';
import './App.css';
import { styled, ThemeProvider } from './theme';
import { MyStyledComponent } from './MyStyledComponent';



class H1 extends Component<{title?:string}> {
    render(){
        return <h1>{this.props.title}</h1>
    }
}

const Header = styled(H1, {
    title: 'asdf'
}, ({theme}) => ({
    color: theme.header.color,
    background: theme.backgroundColor
}))


class App extends Component {
    render() {
        return (
            <ThemeProvider theme="default">
                <div className="App">
                    <Header/>

                    <MyStyledComponent />
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
