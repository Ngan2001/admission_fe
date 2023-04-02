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
import AdminContainer from './component/admin/AdminContainer';
import IndexUser from './component/admin/admin-modules/admission-user/IndexUser';
import CreateUser from './component/admin/admin-modules/admission-user/CreatUser';
import UserDetail from './component/admin/admin-modules/admission-user/UserDetail';
import UpdateUser from './component/admin/admin-modules/admission-user/UpdateUser';
import IndexType from './component/admin/admin-modules/admission-type/IndexType';
import CreateType from './component/admin/admin-modules/admission-type/CreateType';
import DetailType from './component/admin/admin-modules/admission-type/DetailType';
import UpdateType from './component/admin/admin-modules/admission-type/UpdateType';
import IndexAdmission from './component/admin/admin-modules/admissions-admission/IndexAdmission';
import CreateAdmission from './component/admin/admin-modules/admissions-admission/CreateAdmission';
import DetailAdmission from './component/admin/admin-modules/admissions-admission/DetailAdmission';
import UpdateAdmission from './component/admin/admin-modules/admissions-admission/UpdateAdmission';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/*         <Route index element={<App />} /> */}
      <Route path="" element={<App />}>
        <Route path="" element={<Content />} />
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
      </Route>

      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />

      <Route path="admin" element={<AdminContainer />}>
        <Route path="user">
          <Route path="" element={<IndexUser />} />
          <Route exact path="create" element={<CreateUser />} />
          <Route exact path="detail/:userId" element={<UserDetail />} />
          <Route exact path="edit/:userId" element={<UpdateUser />} />
        </Route>
        <Route path="admission-type">
          <Route path="" element={<IndexType />} />
          <Route exact path="create" element={<CreateType />} />
          <Route exact path="detail/:typeId" element={<DetailType />} />
          <Route exact path="edit/:typeId" element={<UpdateType />} />
        </Route>
        <Route path="admission">
          <Route path="" element={<IndexAdmission />} />
          <Route exact path="create" element={<CreateAdmission />} />
          <Route exact path="detail/:admissionId" element={<DetailAdmission />} />
          <Route exact path="edit/:admissionId" element={<UpdateAdmission />} />
        </Route>
      </Route>

      <Route path="admin-login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
