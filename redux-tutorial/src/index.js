import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {combineReducers,createStore} from 'redux';

function productsReducer(state =[], action){
  return state;
}
function userReducer(state =[], action){
  return state;
}
const allReducers=combineReducers({
  products: productsReducer,
  user: userReducer
})

const store = createStore(allReducers);

console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
