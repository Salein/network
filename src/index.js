import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: 'It\'s first', likesCount: 1},
  {id: 1, message: 'Two', likesCount: 5}
]

let dialogs = [
  {id: 1, name: 'awd'},
  {id: 2, name: 'awdawd'},
  {id: 3, name: 'aagsegswd'},
  {id: 4, name: 'rtjj'},
  {id: 5, name: 'ryryrjrtjk'}
]

let messages = [
  {id: 1, message: 'awd'},
  {id: 2, message: 'awgsg'},
  {id: 3, message: 'awdrhdrhd'},
  {id: 4, message: 'adrhdrhreewd'},
  {id: 5, message: 'awde4te4te4ye'}
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
