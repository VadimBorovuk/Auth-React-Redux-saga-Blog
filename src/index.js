import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import logger from "redux-logger";

import reducers from "./redux/reducers/index";
import {watchLoadData} from "./redux/saga/index";

// import 'font-awesome/css/font-awesome.min.css';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, composeWithDevTools(applyMiddleware(logger, sagaMiddleware)));
sagaMiddleware.run(watchLoadData)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

