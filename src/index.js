import React from 'react';
import ReactDOM from 'react-dom/client';
import UpdateDepartment from './component/admin/admin-modules/admision-department/UpdateDepartment';
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
import IndexBanner from './component/admin/admin-modules/admission-banner/IndexBanner';
import CreateBanner from './component/admin/admin-modules/admission-banner/CreateBanner';
import IndexQuestions from './component/admin/admin-modules/admision-questions/IndexQuestions';
import CreateQuetions from './component/admin/admin-modules/admision-questions/CreateQuestions';
import IndexDepartment from './component/admin/admin-modules/admision-department/IndexDepartment';
import CreateDepartment from './component/admin/admin-modules/admision-department/CreateDepartment';
import IndexComment from './component/admin/admin-modules/admision-comment/IndexComment';
import CreateComment from './component/admin/admin-modules/admision-comment/CreateComment';
import IndexLivestreamNotification from './component/admin/admin-modules/admission-livenotification/IndexLivestreamNotification';
import CreateLivestreamNotification from './component/admin/admin-modules/admission-livenotification/CreateLivestreamNotification';
import jwt_decode from "jwt-decode";
import UpdateLivestreamNotification from './component/admin/admin-modules/admission-livenotification/UpdateLivestreamNotification';
import UpdateQuetions from './component/admin/admin-modules/admision-questions/UpdateQuestions';
// import UniversityIndex from './component/university/UniversityIndex';
import IndexSchool from './component/admin/admin-modules/admission-school/IndexSchool';
import CreateSchool from './component/admin/admin-modules/admission-school/CreateSchool';
import UniversityIndex from './component/university/UniversityIndex';
import UpdateSchool from './component/admin/admin-modules/admission-school/UpdateSchool';

if (window.location.href.includes('/admin') && !window.location.href.includes('/admin-login')) {
  let token = localStorage.getItem('token');


  if (!token) {
    window.location.href = '/admin-login';
  } else {
    var decoded = jwt_decode(token);
    if (decoded.exp < Date.now() / 1000) {
      window.location.href = '/admin-login';
    }

    let isAdmin = JSON.parse(localStorage.getItem("is_superuser"));
    console.log(isAdmin);
    if (!isAdmin) {
      window.location.href = '/admin-login';
    }
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/*         <Route index element={<App />} /> */}
      <Route path="" element={<App />}>
        <Route path="" element={<Content />} />
        <Route path="department">
          <Route path="" element={<DepartmentIndex />} />
          <Route path="detail/:departmentId" element={<DepartmentDetail />} />
        </Route>
        <Route path="admission/:admissionType">
          <Route path="" element={<AdmissionIndex />} />
          <Route path="detail/:admissionId" element={<AdmissionDetail />} />
        </Route>
        <Route path="livestream">
          <Route path="" element={<LivestreamIndex />} />
          <Route path="detail/:livestreamId" element={<LivestreamDetail />} />
        </Route>
        <Route path="faq">
          <Route path="" element={<FAQIndex />} />
          <Route path="question" element={<QuestionForm />} />
        </Route>
        <Route path="university">
          <Route path="" element={< UniversityIndex/>} />
          {/* <Route path="question" element={<QuestionForm />} > */}
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
        

        <Route path="banner">
          <Route path="" element={<IndexBanner />} />
          <Route path="create" element={<CreateBanner />} />
        </Route>

        <Route path="questions">
          <Route path="" element={<IndexQuestions />} />
          <Route path="create" element={<CreateQuetions />} />
          <Route exact path="detail/:questionId" element={<DetailAdmission />} />
          <Route exact path="edit/:questionId" element={<UpdateQuetions/>} />

        </Route>

        <Route path="school">
          <Route path="" element={<IndexSchool />} />
          <Route path="create" element={<CreateSchool />} />
          <Route exact path="edit/:schoolId" element={<UpdateSchool />} />

        </Route>


        <Route path="department">
          <Route path="" element={<IndexDepartment />} />
          <Route path="create" element={<CreateDepartment />} />
          <Route exact path="edit/:departmentId" element={<UpdateDepartment />} />

        </Route>

        <Route path="comment">
          <Route path="" element={<IndexComment />} />
          <Route path="create" element={<CreateComment />} />
        </Route>

        <Route path="livestream">
          <Route path="" element={<IndexLivestreamNotification />} />
          <Route path="create" element={<CreateLivestreamNotification />} />
          <Route exact path="edit/:livestreamId" element={<UpdateLivestreamNotification />} />
        
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
