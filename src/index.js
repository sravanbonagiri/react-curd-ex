import React from 'react';
import {render} from 'react-dom';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux'
import App from './containers/App';
import {createStore, applyMiddleware} from 'redux';
import reducer from './redux/reducers'
import sagas from './redux/reducers/sagas/index';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware))
//sagaMiddleware.run(sagas);

render(
  <Provider store={Store}><App /></Provider>, document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
