import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TitledPanel from './chap03/TitledPanel';

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  const title= <p>メンバー募集中！</p>;
  const body=<p>ようこそ、WINGSプロジェクトへ！！</p>;
  root.render(
      <TitledPanel title={title} body={body}></TitledPanel>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
