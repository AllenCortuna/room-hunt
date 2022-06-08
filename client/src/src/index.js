
import { createRoot } from 'react-dom/client';
import React from 'react';
import reportWebVitals from './reportWebVitals';
//import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
const store = createStore(reducers, compose(applyMiddleware(thunk)));
// After
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
