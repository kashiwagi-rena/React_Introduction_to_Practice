import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import books from './chap03/books';
import ListTemplate from './chap03/ListTemplate';

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  root.render(
    <ListTemplate src={books}>
    {elem => (
      <>
        <dt>
          <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
            {elem.title} ({elem.price}円)
          </a>
        </dt>
        <dd>{elem.summary}</dd>
      </>
    )}
    </ListTemplate>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
