import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import axios from 'axios';
import store from 'store';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './store/reducers';
import ScrollMemory from 'react-router-scroll-memory';

const reduxStore = createStore(reducer);

axios.defaults.baseURL = 'http://192.168.43.17:8999';
axios.defaults.headers.common['token'] = store.get('token') ? store.get('token') : undefined;
axios.defaults.headers.common['username'] = store.get('username') ? store.get('username') : undefined;
ReactDOM.render(
    <React.StrictMode>


        <Provider store={reduxStore}>
            <BrowserRouter>
                <ScrollMemory/>
                <App/>
            </BrowserRouter>
        </Provider>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
