import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';

import App from './App';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 옛 버전 */}
    {/* <App />  */}
    {/* 최근버전 */}
    <RouterProvider router={Router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
