import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardList from './CardList';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='flex flex-wrap justify-center'>
      <CardList robots={robots}/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
