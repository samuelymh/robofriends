import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

import { searchRobots } from './reducers';

const store = createStore(searchRobots);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* This provider wrapper ensures that store is passed down to all components */}
    {/* down the tree from App component. So we don't have to do it ourselves.*/}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
// Standard industry convention, is we call smart components -> containers.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
