import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './component/layouts/Login';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Register from './component/layouts/Register';
import DepartmentIndex from './component/department/DepartmentIndex';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/*         <Route index element={<App />} /> */}
        <Route path="" element={<App />}>
          <Route path="/department" element={<DepartmentIndex />}/>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />





      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
