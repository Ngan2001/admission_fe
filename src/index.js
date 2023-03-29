import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './component/layouts/Login';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
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

import IndexAdmission from './component/admin/admin-modules/admission-admission/IndexAdmission';
import CreateAdmission from './component/admin/admin-modules/admission-admission/CreateAdmission';
import IndexType from './component/admin/admin-modules/admission-type/IndexType';
import CreateType from './component/admin/admin-modules/admission-type/CreateType';
import IndexSchool from './component/admin/admin-modules/admission-school/IndexSchool';
import CreateSchool from './component/admin/admin-modules/admission-school/CreateSchool';
import IndexBanner from './component/admin/admin-modules/admission-banner/IndexBanner';
import CreateBanner from './component/admin/admin-modules/admission-banner/CreateBanner';
import IndexQuestions from './component/admin/admin-modules/admision-questions/IndexQuestions';
import CreateQuetions from './component/admin/admin-modules/admision-questions/CreateQuestions';
import IndexComment from './component/admin/admin-modules/admision-comment/IndexComment';
import CreateComment from './component/admin/admin-modules/admision-comment/CreateComment';
import IndexDepartment from './component/admin/admin-modules/admision-department/IndexDepartment';
import CreateDepartment from './component/admin/admin-modules/admision-department/CreateDepartment';
import IndexLiveNotification from './component/admin/admin-modules/admission-livenotification/IndexLiveNotification';
import CreateLiveNotification from './component/admin/admin-modules/admission-livenotification/CreateLiveNotification';
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






        <Route path="admin" element={<AdminContainer />}>
          <Route path="user">
            <Route path="" element={<IndexUser />}/>
            <Route exact path="create" element={<CreateUser />}/>
            <Route exact path="detail/:userId" element={<UserDetail />}/>
            <Route exact path="edit/:userId" element={<UpdateUser />}/>
          </Route>

          <Route path="admission">
            <Route path="" element={<IndexAdmission />}/>
            <Route path="create" element={<CreateAdmission/>}/>
          </Route>

          <Route path="type">
            <Route path="" element={<IndexType />}/>
            <Route path="create" element={<CreateType/>}/>
          </Route>

          <Route path="school">
            <Route path="" element={<IndexSchool />}/>
            <Route path="create" element={<CreateSchool />}/>
          </Route>

          <Route path="banner">
            <Route path="" element={<IndexBanner />}/>
            <Route path="create" element={<CreateBanner />}/>
          </Route>

          <Route path="questions">
            <Route path="" element={<IndexQuestions />}/>
            <Route path="create" element={<CreateQuetions/>}/>
          </Route>

          {/* <Route path="news">
            <Route path="" element={<IndexNews />}/>
            <Route path="create" element={<CreateNews/>}/>
          </Route> */}

          <Route path="department">
            <Route path="" element={<IndexDepartment/>}/>
            <Route path="create" element={<CreateDepartment/>}/>
          </Route>

          <Route path="comment">
            <Route path="" element={<IndexComment />}/>
            <Route path="create" element={<CreateComment />}/>
          </Route>

          <Route path="livestream">
            <Route path="" element={<IndexLiveNotification/>}/>
            <Route path="create" element={<CreateLiveNotification/>}/>
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
