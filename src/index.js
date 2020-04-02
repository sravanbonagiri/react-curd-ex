import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './containers/App';
import {createStore, applyMiddleware} from 'redux';
import reducer from './redux/reducers'
//import {createStore, applyMiddleware} from 'redux'
import * as serviceWorker from './serviceWorker';

const Store = createStore(reducer);

render(
  <Provider store={Store}><App /></Provider>, document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
