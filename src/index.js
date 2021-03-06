import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux'
import { store } from './store/congigureStore'

import App from './app';


ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'))

