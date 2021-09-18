import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import thunk from 'redux-thunk';
import { applyMiddleware,compose,combineReducers,createStore } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';

const allReducers=combineReducers({
  products: productsReducer,
  user: userReducer
});

const allStoreEnhancers = compose (
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
  allReducers,
  {
    products: [{ name: 'iPhone' }],
    user: 'Michael'
  },
  allStoreEnhancers
);

ReactDOM.render(
  <Provider store={store}>
    <App aRandomProps="whatever"/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
