import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { Provider } from "react-redux";
// on importe le store
import { store } from "./store";


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

