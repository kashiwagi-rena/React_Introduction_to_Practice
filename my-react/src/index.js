import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const title = 'これからはじめるVue.js 3実践入門';
root.render(
  React.createElement(
    'div',
    { className: 'main' },
    React.createElement(
      'p',
      null,
      `「${title}」 (SBクリエイティブ刊)`
    ),
    React.createElement(
      'img',
      {
        src: 'http://wings.msn.to/books/978-4-8156-1336-5/978-4-8156-1336-5.jpg',
        alt: title
      }
    ),
    '絶賛発売中！'
  )
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
