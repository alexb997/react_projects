import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from 'redux';

function reducer(state, action){
  if(action.type === 'changeState'){
    return action.payload.newState;
  }
  return 'State';
}

const store = createStore(reducer);

console.log(store.getState());

const action = {
  type : 'changeState',
  payload: {
    newState: 'New State'
  }
}

store.dispatch(action);
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
