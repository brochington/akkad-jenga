import React, {Component} from 'react';
import {Akkad} from 'akkad';
import JengaScene from './scenes/JengaScene';

class App extends Component {
    render() {
        return (
            <div className="app">
                <h1>Akkad boilerplate</h1>
                <Akkad>
                    <JengaScene />
                </Akkad>
            </div>
        )
    }
}

export default App;
