import React from 'react';
import reactDom from 'react-dom';
// import registerServiceWorker from "./registerServiceWorker";
import 'bootstrap/dist/css/bootstrap.css';
import Counters from "./components/counters";

reactDom.render(<Counters />, document.getElementById('root'));
// registerServiceWorker();