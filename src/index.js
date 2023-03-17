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
import Content from './component/layouts/Content';
import DepartmentDetail from './component/department/DepartmentDetail';
import AdmissionIndex from './component/admission/AdmissionIndex';
import AdmissionDetail from './component/admission/AdmissionDetail';
import LivestreamIndex from './component/livestream/LivestreamIndex';
import LivestreamDetail from './component/livestream/LivestreamDetail';
import FAQIndex from './component/faq/FAQIndex';
import QuestionForm from './component/faq/QuestionForm';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/*         <Route index element={<App />} /> */}
        <Route path="" element={<App />}>
          <Route path="" element={<Content />}/>
          <Route path="department">
            <Route path="" element={<DepartmentIndex />} />
            <Route path="detail" element={<DepartmentDetail />} />
          </Route>
          <Route path="admission">
            <Route path="" element={<AdmissionIndex />} />
            <Route path="detail" element={<AdmissionDetail />} />
          </Route>
          <Route path="livestream">
            <Route path="" element={<LivestreamIndex />} />
            <Route path="detail" element={<LivestreamDetail />} />
          </Route>
          <Route path="faq">
            <Route path="" element={<FAQIndex />} />
            <Route path="question" element={<QuestionForm />} />
          </Route>
    {/* <App/> */}
    {/* <BrowserRouter> */}
      {/* <Routes>
                <Route index element={<App />} /> */}



        {/* <Route path="" element={<App />}>
          <Route path="/department" element={<DepartmentIndex />}/>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} /> */}

      </Routes>
    </BrowserRouter>




      {/* </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
