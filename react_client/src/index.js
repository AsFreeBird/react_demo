import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/project/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import ContainerDemo from './style-component/container_demo';
import TitleDemo from './style-component/title-demo';
import ButtonDemo from './style-component/button-demo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ButtonDemo />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
