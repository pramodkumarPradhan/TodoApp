import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/component/Databinding/jquery/jquery.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Fakestore } from './Fakestorepage';
import App from './App';
import { Todoindex } from './To-Do/Todoindex';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Todoindex/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
