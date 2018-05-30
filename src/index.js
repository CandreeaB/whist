import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import mainReducer from "./reducers/index";
import GameApp from './components/App'

let store = createStore(mainReducer, applyMiddleware(logger));

class App extends Component {
    render() {
        return (
           <GameApp />
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

