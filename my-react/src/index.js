import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TitledPanel from './chap03/TitledPanel';

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  root.render(
      <TitledPanel>
        <p key="title">メンバー募集中！</p>
        <p key="body">ようこそ、WINGSプロジェクトへ！！</p>
      </TitledPanel>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
