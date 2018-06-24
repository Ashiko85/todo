import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Home from './routes/home/home.container';
import configureStore from './store';
const store = configureStore();
render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById('root')
);