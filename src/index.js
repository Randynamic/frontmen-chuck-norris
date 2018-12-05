import 'babel-polyfill';

import React      from 'react';
import ReactDOM   from 'react-dom';
import reducers   from './reducers';
import thunk      from 'redux-thunk';
import {Provider} from 'react-redux';
import App        from './app/App';

import {createStore, applyMiddleware} from 'redux';
import 'normalize.css';
import './styles/basis.scss';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);